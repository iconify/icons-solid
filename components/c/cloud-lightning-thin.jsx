import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.qsgtls50d {
  fill: currentColor;
  d: path("M156 20a72.19 72.19 0 0 0-68.49 49.39A48 48 0 1 0 76 164h44.94l-20.37 33.94A4 4 0 0 0 104 204h32.94l-20.37 33.94a4 4 0 0 0 6.86 4.12l24-40A4 4 0 0 0 144 196h-32.94l19.2-32H156a72 72 0 0 0 0-144m0 136H76a40 40 0 1 1 9.43-78.88A71.6 71.6 0 0 0 84 87.77a4 4 0 0 0 8 .46A64.06 64.06 0 1 1 156 156");
}
</style><path class="qsgtls50d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:cloud-lightning-thin"} {...others} />);
}

export default Component;
