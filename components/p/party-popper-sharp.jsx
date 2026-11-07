import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mielwbm-z {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7 9L3 21l12-4c-2 2-10-6-8-8m0 0c2-2 10 6 8 8S5 11 7 9m4-6v2m5 3l2-2m1 7h2M15 3h.01M21 9h-.01");
}
</style><path class="mielwbm-z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:party-popper-sharp"} {...others} />);
}

export default Component;
