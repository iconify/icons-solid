import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q0y8skb1r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3.5H19m-16.5 6H19m-1.5-3a1.5 3 0 1 0 3 0a1.5 3 0 1 0-3 0ZM5 9.5L6.5 15L8 9.5m3 0l1.5 6.5L14 9.5m4 5.5v6m-2.5-4.5l5 3m-5 0l5-3");
}
</style><path class="q0y8skb1r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:pipe-frozen"} {...others} />);
}

export default Component;
