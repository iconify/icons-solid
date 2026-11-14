import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ec5uzhbiq {
  d: path("M2.5 11a9.5 6 0 1 0 19 0a9.5 6 0 1 0-19 0");
}

.ejg2llban {
  d: path("M2.5 11v3a9.5 6 0 0 0 19 0v-3");
}

.f1x-jicox {
  d: path("M7 10.25a5 2.5 0 1 0 10 0a5 2.5 0 1 0-10 0");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="ec5uzhbiq"/><path class="ejg2llban"/><path class="f1x-jicox"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:pet-bed"} {...others} />);
}

export default Component;
