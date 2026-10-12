import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aemasgwuc {
  cx: 14px;
  cy: 11.5px;
  r: 2px;
}

.elj7lmb0r {
  cx: 9.5px;
  cy: 5.5px;
  r: 2.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.iwlcqzzwf {
  d: path("M5 21v-6a3.5 3.5 0 0 1 3.5-3.5H9a5 5 0 0 0 10 0");
}
</style><g class="hntgybcog"><circle class="elj7lmb0r"/><path class="iwlcqzzwf"/><circle class="aemasgwuc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:nursing-mother"} {...others} />);
}

export default Component;
