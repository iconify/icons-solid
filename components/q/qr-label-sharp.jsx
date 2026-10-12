import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.j7w87kbrf {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M21.25 14.25h-7v7Zm-15-8h3.5v3.5h-3.5Zm8 0h3.5v3.5h-3.5Zm-8 8h3.5v3.5h-3.5Z");
}

.to8m3ibcr {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 12h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.vyoj6947f {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 2.75h16.5v11.5l-7 7H2.75V2.75z");
}
</style><g class="ux2u0rbkq"><path class="vyoj6947f"/><path class="j7w87kbrf"/><path class="to8m3ibcr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:qr-label-sharp"} {...others} />);
}

export default Component;
