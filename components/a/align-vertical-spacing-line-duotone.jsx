import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fd7_frbmd {
  d: path("M22 21L2 21");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jqjum4bpa {
  d: path("M16 16H8C6.11438 16 5.17157 16 4.58579 15.4142C4 14.8284 4 13.8856 4 12C4 10.1144 4 9.17157 4.58579 8.58579C5.17157 8 6.11438 8 8 8L16 8C17.8856 8 18.8284 8 19.4142 8.58579C20 9.17157 20 10.1144 20 12C20 13.8856 20 14.8284 19.4142 15.4142C18.8284 16 17.8856 16 16 16Z");
}

.ql8wzqa2k {
  d: path("M22 3L2 3");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><g class="ipq1z-bjh"><path class="ql8wzqa2k"/><path class="fd7_frbmd"/><path class="jqjum4bpa"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-spacing-line-duotone"} {...others} />);
}

export default Component;
