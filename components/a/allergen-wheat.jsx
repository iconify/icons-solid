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

.rv-rerbli {
  d: path("M2.5 12a9.5 9.5 0 1 0 19 0a9.5 9.5 0 1 0-19 0m9.5 6V6.5");
}

.y-mrzhbos {
  d: path("M12 15.5c-2 0-3.25-1.25-3.25-3c2 0 3.25 1.25 3.25 3m0 0c2 0 3.25-1.25 3.25-3c-2 0-3.25 1.25-3.25 3m0-4c-2 0-3.25-1.25-3.25-3c2 0 3.25 1.25 3.25 3m0 0c2 0 3.25-1.25 3.25-3c-2 0-3.25 1.25-3.25 3");
}
</style><g class="hntgybcog"><path class="rv-rerbli"/><path class="y-mrzhbos"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:allergen-wheat"} {...others} />);
}

export default Component;
