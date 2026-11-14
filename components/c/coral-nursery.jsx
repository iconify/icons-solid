import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.afcuofbco {
  d: path("M7 7.5h10a3.5 3.5 0 0 1 3.5 3.5v7a3.5 3.5 0 0 1-3.5 3.5H7A3.5 3.5 0 0 1 3.5 18v-7A3.5 3.5 0 0 1 7 7.5M3 4q2.25-1.5 4.5 0T12 4t4.5 0T21 4m-9 3.5V18");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.qx5ch8hoz {
  d: path("m12 10.5l-3.25 2.75v3.25m3.25-3l3.25 2.75V19");
}
</style><g class="hntgybcog"><path class="afcuofbco"/><path class="qx5ch8hoz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:coral-nursery"} {...others} />);
}

export default Component;
