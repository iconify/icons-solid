import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p92uzhv3v.css';
import '../../css/v/v_hbntbgs.css';
import '../../css/z/zmts5cclx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p92uzhv3v"/><path class="v_hbntbgs"/><path clip-rule="evenodd" class="zmts5cclx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:luca"} {...others} />);
}

export default Component;
