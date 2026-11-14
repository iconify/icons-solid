import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ntlz5q3lk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 11.75h5c1.8 0 3-1.25 3-3.25c0-1.75-1.2-3-3-3H8v13h5.5c2 0 3.25-1.4 3.25-3.5c0-1.9-1.25-3.25-3.25-3.25M11.5 3v2.5m0 13V21");
}
</style><path class="ntlz5q3lk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:currency-baht"} {...others} />);
}

export default Component;
