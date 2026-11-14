import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j2924h81u {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 4h18M5.5 4a6.5 6 0 0 0 13 0M12 7h.01m5.24 6.093a10.5 10.5 0 0 1-10.5 0M19.5 16.99a15 15 0 0 1-15 0");
}
</style><path class="j2924h81u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:smoke-detector-ceiling"} {...others} />);
}

export default Component;
