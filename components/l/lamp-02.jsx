import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/n/n0gmhacsp.css';
import '../../css/x/xrpksfbkh.css';
import '../../css/b/bk_q82bze.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="n0gmhacsp"/><path class="xrpksfbkh"/><path class="bk_q82bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:lamp-02"} {...others} />);
}

export default Component;
