import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.ggyz2fbmm {
  fill: currentColor;
  d: path("M240 128v56a8 8 0 0 1-8 8H128a8 8 0 0 1-8-8V80H32v48a8 8 0 0 1-16 0V72a8 8 0 0 1 8-8h104a8 8 0 0 1 8 8v104h88v-48a8 8 0 0 1 16 0");
}
</style><path class="ggyz2fbmm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:wave-square"} {...others} />);
}

export default Component;
