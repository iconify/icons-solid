import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kxr94xglj {
  d: path("M18.25 9.75L20.5 12l-2.25 2.25");
}

.li2ulccvr {
  d: path("M3.75 12L7 7.5l3.5 9l3.5-9l3 4.5h3.25");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="li2ulccvr"/><path class="kxr94xglj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:arrow-zigzag-sharp"} {...others} />);
}

export default Component;
