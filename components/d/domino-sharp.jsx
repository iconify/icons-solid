import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ddoavgj8g {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 2.75h11v18.5h-11zm2 9.25h7");
}

.m3fpj3xmp {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9.5 5.5h.01M12 7.4h.01m2.49 1.9h.01M9.5 15h.01m4.99 0h.01M9.5 18.25h.01m4.99 0h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="ddoavgj8g"/><path class="m3fpj3xmp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:domino-sharp"} {...others} />);
}

export default Component;
