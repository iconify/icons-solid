import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.t99d-xb3l {
  fill: currentColor;
  d: path("M2.854 2.146a.5.5 0 1 0-.708.708L3.414 4.12A2.5 2.5 0 0 0 3 5.5v9A2.5 2.5 0 0 0 5.5 17h9c.51 0 .983-.152 1.379-.414l1.267 1.268a.5.5 0 0 0 .708-.708zm11.905 13.32a1 1 0 0 1-.259.034h-9a1 1 0 0 1-1-1V7h1.793zM15.5 7v6.379l1.475 1.475Q17 14.68 17 14.5v-9A2.5 2.5 0 0 0 14.5 3h-9q-.18 0-.354.025L9.121 7z");
}
</style><path class="t99d-xb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:window-header-horizontal-off-20-filled"} {...others} />);
}

export default Component;
