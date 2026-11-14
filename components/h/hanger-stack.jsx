import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.abv_hvpxy {
  d: path("m3 19l9-5l9 5z");
}

.az6273bfr {
  d: path("M12 7V6a2 2 0 1 0-2-2m-7 8l9-5l9 5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.lgi1e5_im {
  d: path("m3 15.5l9-5l9 5");
}
</style><g class="hntgybcog"><path class="az6273bfr"/><path class="lgi1e5_im"/><path class="abv_hvpxy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:hanger-stack"} {...others} />);
}

export default Component;
