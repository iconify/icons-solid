import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a_-q_pb0z {
  width: 18.5px;
  height: 18.5px;
  x: 2.75px;
  y: 2.75px;
  rx: 3px;
}

.fqnkq7v9n {
  d: path("M9 18v-4a3 3 0 0 1 6 0v4");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.sgcwx9bsh {
  d: path("M5.75 18v-5a6.25 6.25 0 0 1 12.5 0v5");
}
</style><g class="hntgybcog"><rect class="a_-q_pb0z"/><path class="sgcwx9bsh"/><path class="fqnkq7v9n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tunnel-sign"} {...others} />);
}

export default Component;
