import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/y/yqhv93bnc.css';
import '../../css/d/d_rsssbuh.css';
import '../../css/v/vyfg9nbhl.css';
import '../../css/j/jgh4_14cb.css';
import '../../css/z/z76bh0owq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="yqhv93bnc"/><path class="d_rsssbuh"/><path class="vyfg9nbhl"/><path class="jgh4_14cb"/><path class="z76bh0owq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:printer"} {...others} />);
}

export default Component;
