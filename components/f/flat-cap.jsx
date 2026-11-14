import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zk2vkbcdz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 14c0-3.5 3.5-5.5 9.5-5.5s9.5 2 9.5 5.5Zm3 0c2.5 2 10.5 2 13 0Zm6.5-2.75h.01");
}
</style><path class="zk2vkbcdz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flat-cap"} {...others} />);
}

export default Component;
