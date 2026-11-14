import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.rkgzv7lec {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.5 4h4a2 2 0 0 1 2 2v10l-3-3h-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Zm15 4h-4a2 2 0 0 0-2 2v10l3-3h3a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2Z");
}
</style><path class="rkgzv7lec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cross-examination"} {...others} />);
}

export default Component;
