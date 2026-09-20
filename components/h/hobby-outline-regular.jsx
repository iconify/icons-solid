import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nrj6p8qat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
}

.uw6x37bpc {
  d: path("M12 20c-4 -3 -9 -7 -7 -11.5 1.5 -3 5 -2 7 1 2 -3 5.5 -4 7 -1C21 13 16 17 12 20");
}

.x2r2-hbds {
  d: path("m8 4 2 -2");
}

.ygnemt3bx {
  d: path("m16 4 -2 -2");
}
</style><g class="nrj6p8qat"><path class="uw6x37bpc"/><path class="x2r2-hbds"/><path class="ygnemt3bx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:hobby-outline-regular"} {...others} />);
}

export default Component;
