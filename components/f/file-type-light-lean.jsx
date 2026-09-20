import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.z80ox4b3w {
  fill: none;
  stroke: var(--svg-color--000, #000);
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("m3 3l13 25L29 3M10 16h12");
}
</style><path class="z80ox4b3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-light-lean"} {...others} />);
}

export default Component;
