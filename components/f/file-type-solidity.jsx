import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.pxil1abnu {
  fill: var(--svg-color--c1c1c1, #c1c1c1);
  d: path("m11.477 18l4.5-8l-4.5-8l-4.5 8Zm9.043-4l-4.5 8l4.5 8l4.5-8Z");
  opacity: var(--svg-opacity--0-8, 0.8);
}

.t_ieb-b9f {
  fill: var(--svg-color--c1c1c1, #c1c1c1);
  d: path("m20.477 2l-4.5 8h-9l4.5-8zM11.52 30l4.5-8h9l-4.5 8z");
  opacity: var(--svg-opacity--0-45, 0.45);
}

.za-cxxbxu {
  fill: var(--svg-color--c1c1c1, #c1c1c1);
  d: path("M15.975 10h9l-4.5-8h-9Zm.047 12h-9l4.5 8h9Z");
  opacity: var(--svg-opacity--0-6, 0.6);
}
</style><path class="t_ieb-b9f"/><path class="za-cxxbxu"/><path class="pxil1abnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-solidity"} {...others} />);
}

export default Component;
