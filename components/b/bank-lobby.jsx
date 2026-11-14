import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kqgunrbkp {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13h19v3h-19Zm0-9H7v9H2.5Zm7.25 0h4.5v9h-4.5ZM17 4h4.5v9H17ZM4.5 16v5.5m15-5.5v5.5M4.5 19h15");
}
</style><path class="kqgunrbkp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bank-lobby"} {...others} />);
}

export default Component;
