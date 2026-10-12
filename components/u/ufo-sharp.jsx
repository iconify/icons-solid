import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m4me38btr {
  d: path("M7.5 9.16a4.5 4.5 0 0 1 9 0a9.25 3.25 0 0 0-9 0Zm1 9.09l-1 3m4.5-3v3m3.5-3l1 3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xeg8dccjs {
  d: path("M2.75 12a9.25 3.25 0 1 0 18.5 0a9.25 3.25 0 1 0-18.5 0Z");
}
</style><g class="x2cwu0gfd"><path class="xeg8dccjs"/><path class="m4me38btr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ufo-sharp"} {...others} />);
}

export default Component;
