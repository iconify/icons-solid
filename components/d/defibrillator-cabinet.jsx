import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ry0h36bnu {
  d: path("M10.5 11S7 9 7 6.75c0-1.15.85-2 2-2c.6 0 1.15.25 1.5.75c.35-.5.9-.75 1.5-.75c1.15 0 2 .85 2 2C14 9 10.5 11 10.5 11ZM7 15.5h6m-6 3h6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.wre4tdb4k {
  d: path("M4 2.5h16v19H4ZM16.5 10v4");
}
</style><g class="ulnmmdpxh"><path class="wre4tdb4k"/><path class="ry0h36bnu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:defibrillator-cabinet"} {...others} />);
}

export default Component;
