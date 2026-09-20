import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.san4lf76l {
  fill: currentColor;
  d: path("M136 176a72 72 0 1 0-72-72a72.08 72.08 0 0 0 72 72m0-120a48 48 0 1 1-48 48a48.05 48.05 0 0 1 48-48m12 159.35V228h20a12 12 0 0 1 0 24h-64a12 12 0 0 1 0-24h20v-12.64A112 112 0 0 1 53.88 27.84a12 12 0 1 1 17.59 16.32a88 88 0 0 0 124.37 124.37a12 12 0 1 1 16.32 17.59A111.5 111.5 0 0 1 148 215.35");
}
</style><path class="san4lf76l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:globe-stand-bold"} {...others} />);
}

export default Component;
