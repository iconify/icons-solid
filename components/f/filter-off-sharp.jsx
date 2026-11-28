import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j66o5w8yb {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.6569 3L21 3L15.4257 9.7688L14.79 10.5408M14 14L14 19L10 21L10 14.6569M1.7071 1.7071L22.2929 22.2929");
}
</style><path class="j66o5w8yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:filter-off-sharp"} {...others} />);
}

export default Component;
