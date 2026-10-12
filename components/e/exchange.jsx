import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c6iocdbhi {
  d: path("M14.25 4.75H16a2.75 2.75 0 0 1 2.75 2.75v1.75m-2-1.75l2 2l2-2m-11 11.75H8a2.75 2.75 0 0 1-2.75-2.75v-1.75m-2 1.75l2-2l2 2");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.jkcqce51r {
  cx: 7.5px;
  cy: 7.5px;
  r: 4.25px;
}

.s-lpcnblg {
  cx: 16.5px;
  cy: 16.5px;
  r: 4.25px;
}
</style><g class="hntgybcog"><circle class="jkcqce51r"/><circle class="s-lpcnblg"/><path class="c6iocdbhi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:exchange"} {...others} />);
}

export default Component;
