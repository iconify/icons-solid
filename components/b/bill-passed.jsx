import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vlekvd6wh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M11.3 21.5H4.5v-19h14v7.8M8 7h7m-7 4h7m-7 4h3m4.391 1.116l2.475-2.475l4.243 4.243l-2.475 2.475ZM18.75 17l-4 4");
}
</style><path class="vlekvd6wh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bill-passed"} {...others} />);
}

export default Component;
