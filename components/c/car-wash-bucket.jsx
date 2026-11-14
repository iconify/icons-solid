import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c2gs46bjq {
  d: path("M7.576 9.5h8.848a2.625 2.625 0 0 1 2.593 3.037l-.915 5.75A2.625 2.625 0 0 1 15.51 20.5H8.49a2.625 2.625 0 0 1-2.592-2.213l-.915-5.75A2.625 2.625 0 0 1 7.576 9.5");
}

.f_50j6bxc {
  d: path("M4.5 9.5a7.5 7.5 0 0 1 15 0m-12.25 4h9.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="c2gs46bjq"/><path class="f_50j6bxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:car-wash-bucket"} {...others} />);
}

export default Component;
