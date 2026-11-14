import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yse63vnzv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.359 20.634L8.5 19L5 21V3h14v10.1M8.5 7.5h7m-7 3.5h7m-7 3.5h3m3.25 6.75l6.5-6.5m-5.75.75h.01m4.99 5h.01");
}
</style><path class="yse63vnzv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:spend-and-save"} {...others} />);
}

export default Component;
