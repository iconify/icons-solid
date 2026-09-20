import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.c72v64b0x {
  d: path("M152 32H72a8 8 0 0 0-8 8v128a80.09 80.09 0 0 0 80 80a8 8 0 0 0 8-8v-64a72 72 0 0 0 0-144M80 70.54L130.32 160H80Zm56 161A64.14 64.14 0 0 1 80.51 176H136Zm0-94L85.68 48H136ZM152 160V48a56 56 0 0 1 0 112");
}

.cuyn6tgcc {
  fill: currentColor;
}

.nzgs_u65b {
  d: path("M216 104a64 64 0 0 1-64 64h-8V40h8a64 64 0 0 1 64 64M72 168h72L72 40Z");
  opacity: var(--svg-opacity--0-2, 0.2);
}
</style><g class="cuyn6tgcc"><path class="nzgs_u65b"/><path class="c72v64b0x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:phosphor-logo-duotone"} {...others} />);
}

export default Component;
