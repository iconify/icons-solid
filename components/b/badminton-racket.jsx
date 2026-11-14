import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yyezy6g4w {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9 9a6 4.5 0 1 0 12 0A6 4.5 0 1 0 9 9Zm1.75 4.25l-2.5 2.5m-1.189-.932l2.121 2.121l-4.243 4.243l-2.121-2.121Zm3.696-1.575l8.486-8.486m-7.425 1.061l6.364 6.364");
}
</style><path class="yyezy6g4w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:badminton-racket"} {...others} />);
}

export default Component;
