import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qaivvqbrx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 19h19m-15 0a5.5 5.5 0 0 1 11 0M12 10.75v-2M6 13l-1.75-1.75M18 13l1.75-1.75M4 8h4a2 2 0 0 0 0-4a3 3 0 0 0-5 1.5A1.5 1.5 0 0 0 4 8Z");
}
</style><path class="qaivvqbrx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pin-sunset"} {...others} />);
}

export default Component;
