import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/b/bkgsdzb8x.css';
import '../../css/i/iuvgjdbsi.css';
import '../../css/z/z1ql_32mh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="bkgsdzb8x"/><path class="iuvgjdbsi"/><path class="z1ql_32mh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:mail-send-01"} {...others} />);
}

export default Component;
