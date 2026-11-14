import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iwnjyg4qt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.75 2.5h10.5A1.75 1.75 0 0 1 19 4.25A1.75 1.75 0 0 1 17.25 6H6.75A1.75 1.75 0 0 1 5 4.25A1.75 1.75 0 0 1 6.75 2.5M5 6l-.75 15h6.25L12 11l1.5 10h6.25L19 6M4.5 18h6.25m2.5 0h6.25");
}
</style><path class="iwnjyg4qt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:fencing-breeches"} {...others} />);
}

export default Component;
