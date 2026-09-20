import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":36,"height":36};
const content = `<style>.j6bk8wgmi {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--aa8ed6, #aa8ed6);
}
</style><circle class="j6bk8wgmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"twemoji:purple-circle"} {...others} />);
}

export default Component;
