import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.har4go24q {
  cx: 12px;
  cy: 18.75px;
  r: 2.5px;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.oq_o2gw7k {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 11.5h.01m9.49 0h.01");
}

.rggu11tpp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10.5 8V3.25h3V8M7.25 8h9.5a3.5 3.5 0 0 1 0 7c-2 0-3.25-.75-4.75-1.75c-1.5 1-2.75 1.75-4.75 1.75a3.5 3.5 0 0 1 0-7Z");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}
</style><g class="ux2u0rbkq"><path class="rggu11tpp"/><path class="oq_o2gw7k"/><circle class="har4go24q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:baby-pacifier-sharp"} {...others} />);
}

export default Component;
