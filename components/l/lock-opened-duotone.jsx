import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/frndcpb0j.css';
import '../../css/t/tn4b2zsid.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="frndcpb0j"/><path class="tn4b2zsid"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:lock-opened-duotone"} {...others} />);
}

export default Component;
