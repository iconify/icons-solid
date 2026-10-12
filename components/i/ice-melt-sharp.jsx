import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sw5py35ge {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5.75 5.25v-2.5h12.5v9a1.5 1.5 0 0 1-3 0a1 1 0 0 0-2 0v3.5h-3v-3.5a1 1 0 0 0-2 0a1.25 1.25 0 0 1-2.5 0Zm3 2.5l2.5-2.5m.5 12l1.35 1.747v.753a1.35 1.35 0 0 1-2.7 0v-.753z");
}
</style><path class="sw5py35ge"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ice-melt-sharp"} {...others} />);
}

export default Component;
