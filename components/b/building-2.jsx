import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwehdglvt.css';
import '../../css/x/x14ag3b9u.css';
import '../../css/h/hctpnchwe.css';
import '../../css/d/d1pkmssnf.css';
import '../../css/v/vbsp87i-g.css';
import '../../css/z/z6svwl8og.css';
import '../../css/a/ab0secboo.css';
import '../../css/f/fs_2xuabv.css';
import '../../css/s/slu0_t5uo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwehdglvt wm-shadow"/><path class="wm-k x14ag3b9u"/><path class="hctpnchwe wm-k"/><path class="d1pkmssnf wm-k"/><path class="vbsp87i-g wm-k"/><path class="wm-k z6svwl8og"/><path class="ab0secboo wm-shine"/><path class="fs_2xuabv wm-k"/><path class="slu0_t5uo wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:building-2"} {...others} />);
}

export default Component;
