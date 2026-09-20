import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.bnrkjfbef {
  fill: var(--svg-color--43a047, #43a047);
  d: path("M2 9v7l7 7v-7Z");
}

.hbtce61ft {
  fill: var(--svg-color--43a047, #43a047);
  d: path("M30 9v7l-7 7v-7ZM16 9l7 7l-7 7l-7-7Z");
}

.jlkd9_bco {
  fill: var(--svg-color--00701a, #00701a);
  d: path("M16 23v7l-7-7v-7Z");
}

.uwchsj54e {
  fill: var(--svg-color--76d275, #76d275);
  d: path("m23 2l7 7l-7 7l-7-7Z");
}

.y6-j5hbcr {
  fill: var(--svg-color--76d275, #76d275);
  d: path("m9 2l7 7l-7 7l-7-7Z");
}

.yic0uab0p {
  fill: var(--svg-color--004300, #004300);
  d: path("m16 23l7-7v7l-7 7Z");
}
</style><path class="y6-j5hbcr"/><path class="bnrkjfbef"/><path class="uwchsj54e"/><path class="hbtce61ft"/><path class="jlkd9_bco"/><path class="yic0uab0p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-bazel"} {...others} />);
}

export default Component;
