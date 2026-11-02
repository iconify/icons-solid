import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.synt9-bkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 7v14m9-9a9 9 0 0 1-18 0m0 0h2m16 0h-2M9 11h6m-5-6a2 2 0 1 0 4 0a2 2 0 0 0-4 0");
}
</style><path class="synt9-bkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:anchor-sharp"} {...others} />);
}

export default Component;
