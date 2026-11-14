import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fed2k6bxs {
  d: path("M2.5 9c5.5 0 7-3 7-6.5M2.5 14c8 0 12-5 12-11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.mkzojhn9z {
  fill: currentColor;
  d: path("M21.5 5v16.5H5c7 0 16.5-8.5 16.5-16.5");
}
</style><g class="hntgybcog"><path class="fed2k6bxs"/><path class="mkzojhn9z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:gravel-trap"} {...others} />);
}

export default Component;
