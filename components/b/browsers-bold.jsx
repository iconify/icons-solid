import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.xsr6qibzj {
  fill: currentColor;
  d: path("M220 32H76a20 20 0 0 0-20 20v20H36a20 20 0 0 0-20 20v112a20 20 0 0 0 20 20h144a20 20 0 0 0 20-20v-20h20a20 20 0 0 0 20-20V52a20 20 0 0 0-20-20m-44 64v16H40V96Zm0 104H40v-64h136Zm40-40h-16V92a20 20 0 0 0-20-20H80V56h136Z");
}
</style><path class="xsr6qibzj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:browsers-bold"} {...others} />);
}

export default Component;
