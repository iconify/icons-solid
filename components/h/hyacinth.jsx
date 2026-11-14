import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oxn5ak41k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.5a2.25 2.25 0 0 1 2 3a1.75 1.75 0 0 1 0 3.25A1.75 1.75 0 0 1 14 12a2 2 0 0 1-2 3a2 2 0 0 1-2-3a1.75 1.75 0 0 1 0-3.25a1.75 1.75 0 0 1 0-3.25a2.25 2.25 0 0 1 2-3M12 15v6.5m0 0c-3.5-1-5-3.5-5-6.75m5 6.75c3.5-1 5-3.5 5-6.75");
}
</style><path class="oxn5ak41k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hyacinth"} {...others} />);
}

export default Component;
