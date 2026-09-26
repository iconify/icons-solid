import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mnadkbvsb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M11 4L12.5 3V9M3 18H17C19.2091 18 21 16.2091 21 14V9C21 6.79086 19.2091 5 17 5H16.5M6 15L3 18L6 21M3 11V9C3 6.79086 4.79086 5 7 5");
}
</style><path class="mnadkbvsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:repeat-1-fill"} {...others} />);
}

export default Component;
