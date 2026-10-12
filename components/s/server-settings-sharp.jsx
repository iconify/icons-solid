import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kqezffzhk {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.25 3.25h17.5v7.5H3.25zm0 10h17.5v7.5H3.25z");
}

.qwn4--teq {
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M7.25 7h.01m-.01 10h.01");
}

.ux2u0rbkq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
}

.va-cqqbhp {
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.25 7h5.5m-5.5 10h5.5");
}
</style><g class="ux2u0rbkq"><path class="kqezffzhk"/><path class="qwn4--teq"/><path class="va-cqqbhp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:server-settings-sharp"} {...others} />);
}

export default Component;
