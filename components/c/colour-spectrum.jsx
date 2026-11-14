import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jyofzvxlg {
  d: path("M5.5 15a6.5 6.5 0 0 1 13 0");
}

.pendosb4v {
  d: path("M8.5 15a3.5 3.5 0 0 1 7 0m-13 3h19");
}

.rea0e7b2m {
  d: path("M2.5 15a9.5 9.5 0 0 1 19 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="rea0e7b2m"/><path class="jyofzvxlg"/><path class="pendosb4v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:colour-spectrum"} {...others} />);
}

export default Component;
