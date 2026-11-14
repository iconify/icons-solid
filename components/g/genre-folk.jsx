import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cxnv0nbrj {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 16a5.5 5.5 0 1 0 11 0a5.5 5.5 0 1 0-11 0m5-13.5h1A1.5 1.5 0 0 1 14 4a1.5 1.5 0 0 1-1.5 1.5h-1A1.5 1.5 0 0 1 10 4a1.5 1.5 0 0 1 1.5-1.5m.5 3v14m-2-2h4");
}
</style><path class="cxnv0nbrj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:genre-folk"} {...others} />);
}

export default Component;
