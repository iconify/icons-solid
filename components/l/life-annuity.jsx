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

.oj0aovi6j {
  d: path("M8.25 9v6a3.75 1.75 0 0 0 7.5 0V9m-7.5 3a3.75 1.75 0 0 0 7.5 0");
}

.xu3nmbclo {
  d: path("M16.5 4a9.25 9.25 0 1 1-9 0");
}

.y0unc2bha {
  d: path("M5 3.25L7.5 4l-.75 2.5M8.25 9a3.75 1.75 0 1 0 7.5 0a3.75 1.75 0 1 0-7.5 0");
}
</style><g class="hntgybcog"><path class="xu3nmbclo"/><path class="y0unc2bha"/><path class="oj0aovi6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:life-annuity"} {...others} />);
}

export default Component;
