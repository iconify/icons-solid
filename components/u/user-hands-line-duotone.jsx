import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dtl23o_xq {
  cx: 12px;
  cy: 6px;
  r: 4px;
}

.fdcia5wbd {
  d: path("M20 21.5L19.3505 15.9795C19.1506 14.2804 17.7107 13 16 13H8C6.28928 13 4.84936 14.2804 4.64948 15.9795L4 21.5");
}

.i5bv225ul {
  d: path("M16 13V18C16 19.8856 16 20.8284 15.4142 21.4142C14.8284 22 13.8856 22 12 22C10.1144 22 9.17157 22 8.58579 21.4142C8 20.8284 8 19.8856 8 18V13");
  opacity: var(--svg-opacity--0-5, 0.5);
}

.ipq1z-bjh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ipq1z-bjh"><path class="fdcia5wbd"/><path class="i5bv225ul"/><circle class="dtl23o_xq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-hands-line-duotone"} {...others} />);
}

export default Component;
