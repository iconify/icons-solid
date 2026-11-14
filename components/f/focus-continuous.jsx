import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6g8k34fq {
  d: path("M3.5 8.5V6A2.5 2.5 0 0 1 6 3.5h2.5m7 0H18A2.5 2.5 0 0 1 20.5 6v2.5m-17 7V18A2.5 2.5 0 0 0 6 20.5h2.5m-.75-9.25a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0m13 7.25A2.75 2.75 0 1 1 18 15.75");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.is8nqnbzt {
  d: path("M16.75 14.5L18 15.75L16.75 17");
}
</style><g class="hntgybcog"><path class="h6g8k34fq"/><path class="is8nqnbzt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:focus-continuous"} {...others} />);
}

export default Component;
