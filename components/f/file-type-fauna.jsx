import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.xdx_7e5yi {
  fill: var(--svg-color--323fcb, #323fcb);
  d: path("m4.682 2l14.035 11.191l2.428-3.122l6.173-1.248l-3.118 5.133v6.589L7.341 30l4.439-7.237L16 20.058l-4.22.971l-3.953-6.451L15.6 16.59l-8.67-4.232Z");
}
</style><path class="xdx_7e5yi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vscode-icons:file-type-fauna"} {...others} />);
}

export default Component;
