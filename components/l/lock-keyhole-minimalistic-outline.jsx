import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sdp_xxbiy.css';
import '../../css/z/zutdd9mbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sdp_xxbiy"/><path clip-rule="evenodd" class="zutdd9mbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-keyhole-minimalistic-outline"} {...others} />);
}

export default Component;
