import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tkp_1hbtw {
  fill: currentColor;
  d: path("M173.17 133.17L214.34 92H88a52 52 0 0 0 0 104h88a4 4 0 0 1 0 8H88a60 60 0 0 1 0-120h126.34l-41.17-41.17a4 4 0 0 1 5.66-5.66l48 48a4 4 0 0 1 0 5.66l-48 48a4 4 0 0 1-5.66-5.66");
}
</style><path class="tkp_1hbtw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-up-right-thin"} {...others} />);
}

export default Component;
