import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8_gpdnft {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4 3.5h12.5v16A1.5 1.5 0 0 1 15 21H7a1.5 1.5 0 0 1-1.5-1.5V6Zm12.5 3h2A1.5 1.5 0 0 1 20 8v6.5a1.5 1.5 0 0 1-1.5 1.5h-2m-11-8h11");
}
</style><path class="k8_gpdnft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:beer-pitcher"} {...others} />);
}

export default Component;
