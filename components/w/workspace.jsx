import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a-e-swtkn {
  d: path("M12 12.25v3m-9.25 0h18.5m-16.5 0v6m14.5-6v6");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.vv3by8wrj {
  width: 13.5px;
  height: 9.5px;
  x: 5.25px;
  y: 2.75px;
  rx: 2px;
}
</style><g class="hntgybcog"><rect class="vv3by8wrj"/><path class="a-e-swtkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:workspace"} {...others} />);
}

export default Component;
