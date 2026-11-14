import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k8q10lbtw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 7.5h7.5l2 2.75v3.5l-2 2.75H3M3 6v12m9.5-7.75h3v3.5h-3ZM18.25 8q1-1.25 2 0t1.25.5M18.25 12q1-1.25 2 0t1.25.5M18.25 16q1-1.25 2 0t1.25.5");
}
</style><path class="k8q10lbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:anti-itch"} {...others} />);
}

export default Component;
