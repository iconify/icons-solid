import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.b13a6fbul {
  fill: var(--svg-color--94ded7, #94ded7);
  d: path("M16.002 16.256L4.252 9.133l11.75-7.12l11.747 7.12z");
}

.ce1ltlj8d {
  fill: var(--svg-color--68d1c7, #68d1c7);
  d: path("M16.002 16.256v13.73l11.747-7.12V9.134z");
}

.pys5cfaeq {
  fill: var(--svg-color--28bdb0, #28bdb0);
  d: path("M16.002 16.256v13.73l-11.75-7.12V9.134z");
}
</style><path class="pys5cfaeq"/><path class="ce1ltlj8d"/><path class="b13a6fbul"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-taskfile"} {...others} />);
}

export default Component;
