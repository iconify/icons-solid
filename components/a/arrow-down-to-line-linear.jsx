import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a8axvdbak {
  d: path("M20 21L4 21");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.u09qwnbtf {
  d: path("M12 3L12 16M16 11.625L12 16L8 11.625");
}
</style><g class="hntgybcog"><path class="a8axvdbak"/><path class="u09qwnbtf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:arrow-down-to-line-linear"} {...others} />);
}

export default Component;
