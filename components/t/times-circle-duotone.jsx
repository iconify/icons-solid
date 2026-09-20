import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vla37tbfm.css';
import '../../css/w/wgw8u43wm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vla37tbfm"/><path class="wgw8u43wm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:times-circle-duotone"} {...others} />);
}

export default Component;
