import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.rd4vukbue {
  fill: var(--svg-color--d2d2d2, #d2d2d2);
  d: path("M2.58 30h11.1V12.92c0-1.26.9-2.17 2.34-2.17c1.18 0 2.3.9 2.3 2.17V30h11.1V3.78c0-.98-.8-1.78-1.78-1.78H2.58z");
}
</style><path class="rd4vukbue"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-noir"} {...others} />);
}

export default Component;
