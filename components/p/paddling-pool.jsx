import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pw4mbh9dh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 10h19v3.5h-19ZM4 13.5l1.5 6h13l1.5-6M4.5 6c1.5-1.5 3-1.5 5 0c1.5 1.5 3 1.5 5 0c1.5-1.5 3-1.5 5 0");
}
</style><path class="pw4mbh9dh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:paddling-pool"} {...others} />);
}

export default Component;
