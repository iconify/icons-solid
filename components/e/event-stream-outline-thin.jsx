import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nbncjhbtk {
  d: path("M7.5 7.5 10 10");
}

.qp5e0_b3n {
  d: path("M12.5 12.5 15 15");
}

.tdk6nzbaw {
  d: path("M20.5 17v3.5H17");
}

.ucd8o6bjf {
  d: path("M2.5 2.5 5 5");
}
</style><g class="hntgybcog"><path class="ucd8o6bjf"/><path class="nbncjhbtk"/><path class="qp5e0_b3n"/><path class="tdk6nzbaw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconmind:event-stream-outline-thin"} {...others} />);
}

export default Component;
