import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.xwthxtbod {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M10.2563 2.5588L3.2563 7.5588C2.4679 8.1219 2 9.0311 2 10L2 19C2 20.6569 3.3431 22 5 22L19 22C20.6569 22 22 20.6569 22 19L22 10C22 9.0311 21.5321 8.1219 20.7437 7.5588L13.7437 2.5588C12.7006 1.8137 11.2994 1.8137 10.2563 2.5588ZM2 10L10.8375 16.3125C11.5329 16.8092 12.4671 16.8092 13.1625 16.3125L22 10");
}
</style><path class="xwthxtbod"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:mail-open"} {...others} />);
}

export default Component;
