import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.l83f5-b4x {
  fill: var(--svg-color--green, green);
  d: path("M4.178 4.956h17.37v6.45H4.178zm7.145 8.538h17.37v6.45h-17.37zm10.334 8.539h7.036v6.45h-7.036z");
}
</style><path class="l83f5-b4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-pddl-plan"} {...others} />);
}

export default Component;
