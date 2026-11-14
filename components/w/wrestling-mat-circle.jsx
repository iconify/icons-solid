import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ng6czxbrf {
  d: path("M7.5 12a4.5 3 0 1 0 9 0a4.5 3 0 1 0-9 0");
}

.xaj46zbrs {
  d: path("M6.866 6h12.393a1.75 1.75 0 0 1 1.697 2.174l-2.125 8.5A1.75 1.75 0 0 1 17.134 18H4.741a1.75 1.75 0 0 1-1.697-2.174l2.125-8.5A1.75 1.75 0 0 1 6.866 6");
}
</style><g class="hntgybcog"><path class="xaj46zbrs"/><path class="ng6czxbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:wrestling-mat-circle"} {...others} />);
}

export default Component;
