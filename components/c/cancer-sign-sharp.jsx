import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gcgmiybrc {
  d: path("M17.25 18c-3.5 2.5-9.25 2.5-13.5-.5");
}

.kagbwcbhh {
  d: path("M6.75 6c3.5-2.5 9.25-2.5 13.5.5");
}

.ulfr24xqb {
  cx: 6.75px;
  cy: 8.75px;
  r: 2.75px;
}

.usz72eb9x {
  cx: 17.25px;
  cy: 15.25px;
  r: 2.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="ulfr24xqb"/><path class="kagbwcbhh"/><circle class="usz72eb9x"/><path class="gcgmiybrc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cancer-sign-sharp"} {...others} />);
}

export default Component;
