import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gmf9qrbcd {
  cx: 12px;
  cy: 14.75px;
  r: 2.75px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.klgu-xdto {
  d: path("M10.25 7.25h3.5");
}

.um53i40nw {
  width: 11.5px;
  height: 18.5px;
  x: 6.25px;
  y: 2.75px;
  rx: 5.75px;
}
</style><g class="hntgybcog"><rect class="um53i40nw"/><path class="klgu-xdto"/><circle class="gmf9qrbcd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:doorbell"} {...others} />);
}

export default Component;
