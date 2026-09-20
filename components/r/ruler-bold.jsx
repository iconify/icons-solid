import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.chaf5hbnl {
  fill: currentColor;
  d: path("m238.15 70.54l-52.69-52.68a20 20 0 0 0-28.29 0L17.85 157.17a20 20 0 0 0 0 28.29l52.69 52.68a20 20 0 0 0 28.29 0L238.15 98.83a20 20 0 0 0 0-28.29M84.68 218.34l-47-47L64 145l23.52 23.52a12 12 0 0 0 17-17L81 128l15-15l23.51 23.52a12 12 0 0 0 17-17L113 96l15-15l23.52 23.52a12 12 0 0 0 17-17L145 64l26.35-26.34l47 47Z");
}
</style><path class="chaf5hbnl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:ruler-bold"} {...others} />);
}

export default Component;
