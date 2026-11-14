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

.km4oxrb9q {
  d: path("M3 19c7 0 12-8 17-13");
}

.mlz9rob2a {
  d: path("M15 6h5v5");
}
</style><g class="hntgybcog"><path class="km4oxrb9q"/><path class="mlz9rob2a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:trend-arrow-up"} {...others} />);
}

export default Component;
