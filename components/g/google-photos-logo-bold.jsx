import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dmzf_cekc.css';
import '../../css/y/yybosibpn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dmzf_cekc"/><path class="yybosibpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:google-photos-logo-bold"} {...others} />);
}

export default Component;
