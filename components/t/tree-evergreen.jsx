import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.vh7xqqbok {
  fill: currentColor;
  d: path("m230.32 187.09l-46-59.09H208a8 8 0 0 0 6.34-12.88l-80-104a8 8 0 0 0-12.68 0l-80 104A8 8 0 0 0 48 128h23.64l-46 59.09A8 8 0 0 0 32 200h88v40a8 8 0 0 0 16 0v-40h88a8 8 0 0 0 6.32-12.91M48.36 184l46-59.09A8 8 0 0 0 88 112H64.25L128 29.12L191.75 112H168a8 8 0 0 0-6.31 12.91L207.64 184Z");
}
</style><path class="vh7xqqbok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:tree-evergreen"} {...others} />);
}

export default Component;
