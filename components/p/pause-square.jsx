import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bwvftibxc {
  width: 4.5px;
  height: 16.5px;
  x: 13.75px;
  y: 3.75px;
  rx: 1.5px;
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.psrh26ros {
  width: 4.5px;
  height: 16.5px;
  x: 5.75px;
  y: 3.75px;
  rx: 1.5px;
}
</style><g class="hntgybcog"><rect class="psrh26ros"/><rect class="bwvftibxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pause-square"} {...others} />);
}

export default Component;
