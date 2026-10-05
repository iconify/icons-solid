import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fwt4_36rp.css';
import '../../css/f/fqa1e_awf.css';
import '../../css/y/ykall_bto.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="fwt4_36rp"/><path class="fqa1e_awf"/><path class="ykall_bto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:archive"} {...others} />);
}

export default Component;
