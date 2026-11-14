import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tqre6m1po {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 11H13v10.5H3.5Zm2 0V7.5a2 2 0 0 1 2-2h7V9H10v2m7.25-5.75l2.25-1.5m-2 3.5h3.25m-3.5 2l2.25 1.5");
}
</style><path class="tqre6m1po"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:face-mist"} {...others} />);
}

export default Component;
