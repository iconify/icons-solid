import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dssu7hbua {
  d: path("M2.5 7.25h19a9.5 9.5 0 0 1-19 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.y_xfh_-pz {
  d: path("M5.5 7.25a6.5 6.5 0 0 0 13 0");
}
</style><g class="hntgybcog"><path class="dssu7hbua"/><path class="y_xfh_-pz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:dried-mango"} {...others} />);
}

export default Component;
