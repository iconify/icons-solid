import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dwk2gcb3m {
  d: path("M19.5 15h-4a1.5 1.5 0 0 0-1.5 1.5v4M8 9h8m-8 4h5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.nngizebsx {
  d: path("M4.5 4.5h15V15L14 20.5H4.5Z");
}
</style><g class="hntgybcog"><path class="nngizebsx"/><path class="dwk2gcb3m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cover-note"} {...others} />);
}

export default Component;
