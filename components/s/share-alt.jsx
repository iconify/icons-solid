import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pxk67cb0y {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M20 8a3.162 3.162 0 1 1-6-2a3.162 3.162 0 0 1 6 2m-10 5a3.162 3.162 0 1 1-6-2a3.162 3.162 0 0 1 6 2m10 5a3.162 3.162 0 1 1-6-2a3.162 3.162 0 0 1 6 2m-10-7l4-3m-4 5l4 3");
}
</style><path class="pxk67cb0y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:share-alt"} {...others} />);
}

export default Component;
