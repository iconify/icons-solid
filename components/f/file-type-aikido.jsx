import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.zl_mtn6es {
  fill: var(--svg-color--6551f3, #6551f3);
  d: path("M28.44 2H3.56v8.8h24.88zM3.56 19.04a18.5 18.5 0 0 1 24.88 0V30L16 17.38L3.56 30z");
}
</style><path class="zl_mtn6es"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-aikido"} {...others} />);
}

export default Component;
