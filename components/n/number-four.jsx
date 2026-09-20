import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.a-qbtostw {
  fill: currentColor;
  d: path("M184 160h-16V48a8 8 0 0 0-14.25-5l-96 120A8 8 0 0 0 64 176h88v32a8 8 0 0 0 16 0v-32h16a8 8 0 0 0 0-16m-32 0H80.64L152 70.81Z");
}
</style><path class="a-qbtostw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:number-four"} {...others} />);
}

export default Component;
