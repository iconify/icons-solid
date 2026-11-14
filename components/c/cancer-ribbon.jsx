import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yzc30o_8q {
  d: path("M9 3C6 3 5.5 6.5 8 9.5l8 11");
}

.z963z9bsq {
  d: path("M15 3c3 0 3.5 3.5 1 6.5l-8 11");
}
</style><g class="ulnmmdpxh"><path class="yzc30o_8q"/><path class="z963z9bsq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cancer-ribbon"} {...others} />);
}

export default Component;
