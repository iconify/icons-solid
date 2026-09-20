import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.dmbb0_y-c {
  fill: var(--svg-color--28a3b2, #28a3b2);
  d: path("M4.6 30S-6.108 12.967 15.925 2v28zm14.737 0V12.645S22.853 18.381 30 30z");
}
</style><path class="dmbb0_y-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-sails"} {...others} />);
}

export default Component;
