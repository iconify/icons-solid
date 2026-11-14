import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.a5lxufbtt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 20.5v-9c0-1.5 1-2 1-3V4h2v4.5c0 1 1 1.5 1 3v9m3 0V14c0-1.5 1-2 1-3V7h2v4c0 1 1 1.5 1 3v6.5m3 0V16c0-1.5 1-2 1-3v-2.5h2V13c0 1 1 1.5 1 3v4.5m-18.5 0h19");
}
</style><path class="a5lxufbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:liquor-shelf"} {...others} />);
}

export default Component;
