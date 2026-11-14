import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.etuv3obgb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.5h5A1.75 1.75 0 0 1 11 4.25v15.5a1.75 1.75 0 0 1-1.75 1.75h-5a1.75 1.75 0 0 1-1.75-1.75V4.25A1.75 1.75 0 0 1 4.25 2.5m11 0h4.5a1.75 1.75 0 0 1 1.75 1.75v6A1.75 1.75 0 0 1 19.75 12h-4.5a1.75 1.75 0 0 1-1.75-1.75v-6a1.75 1.75 0 0 1 1.75-1.75m-.375 12za1.375 1.375 0 0 1 1.375 1.375v4.25a1.375 1.375 0 0 1-1.375 1.375a1.375 1.375 0 0 1-1.375-1.375v-4.25a1.375 1.375 0 0 1 1.375-1.375m5.25 0za1.375 1.375 0 0 1 1.375 1.375v4.25a1.375 1.375 0 0 1-1.375 1.375a1.375 1.375 0 0 1-1.375-1.375v-4.25a1.375 1.375 0 0 1 1.375-1.375");
}
</style><path class="etuv3obgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:chart-mosaic"} {...others} />);
}

export default Component;
