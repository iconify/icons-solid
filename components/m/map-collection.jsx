import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hkoqnyrzh {
  d: path("m2.5 10l4.25-1.5l4.5 1.5l4.25-1.5V20l-4.25 1.5l-4.5-1.5l-4.25 1.5Zm4.25-1.5V20m4.5-10v11.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.q4kykgc9i {
  d: path("m5.5 7l4.25-1.5l4.5 1.5l4.25-1.5V17l-3 1");
}

.tmucf2bze {
  d: path("m8.5 4l4.25-1.5l4.5 1.5l4.25-1.5V14l-3 1");
}
</style><g class="hntgybcog"><path class="hkoqnyrzh"/><path class="q4kykgc9i"/><path class="tmucf2bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:map-collection"} {...others} />);
}

export default Component;
