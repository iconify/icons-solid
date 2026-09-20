import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wgn4dacid.css';
import '../../css/z/zvp4gxblo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wgn4dacid"/><path class="zvp4gxblo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:signin-duotone"} {...others} />);
}

export default Component;
