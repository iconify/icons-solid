import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d4sb11f1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 3h6.5l1 5L14 9.25a2 2 0 0 1 1.5 2v2.25H3Zm2 10.5v3m7-3v3m-9.5 0h10.8m4.2-.5h4v5.5h-4L15 18.75Zm.5 2.75h.01");
}
</style><path class="d4sb11f1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:skate-rental"} {...others} />);
}

export default Component;
