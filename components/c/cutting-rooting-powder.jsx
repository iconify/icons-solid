import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gy18w5b_j {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6 11.5h12v10H6Zm1.5-2.75h9M12 5.5v3.25m0-3.25c0-2-2-3-4.5-3c0 2 2 3 4.5 3Zm0 0c0-2 2-3 4.5-3c0 2-2 3-4.5 3Z");
}
</style><path class="gy18w5b_j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cutting-rooting-powder"} {...others} />);
}

export default Component;
