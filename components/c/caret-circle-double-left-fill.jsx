import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.i_s1pt0cm {
  fill: currentColor;
  d: path("M201.57 54.42a104 104 0 1 0 0 147.15a104.17 104.17 0 0 0 0-147.15m-83.92 99.93a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L91.29 128Zm56 0a8 8 0 1 1-11.32 11.32l-32-32a8 8 0 0 1 0-11.32l32-32a8 8 0 1 1 11.32 11.32L147.32 128Z");
}
</style><path class="i_s1pt0cm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-circle-double-left-fill"} {...others} />);
}

export default Component;
