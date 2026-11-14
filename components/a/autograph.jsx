import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.y9vnrbczh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15C5 9.5 6.5 6 8 6s.5 8 2 8s2-4.5 3.5-4.5s1 3.5 2.5 3.5c1.25 0 2.5-1.5 4.5-2.5m-17 9h17");
}
</style><path class="y9vnrbczh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:autograph"} {...others} />);
}

export default Component;
