import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mr2a-eb6v {
  d: path("M10 9.5h4V14h-4Zm-2.5 2.25H10m4 0h2.5");
}

.u007blnnp {
  d: path("M7 18.5L8 5h8l1 13.5m-14.5 0h19");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="u007blnnp"/><path class="mr2a-eb6v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pilgrim-hat"} {...others} />);
}

export default Component;
