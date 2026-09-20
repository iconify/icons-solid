import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wzyky7bnb.css';
import '../../css/j/jpf6i3h8v.css';
import '../../css/m/m_rmalbye.css';
import '../../css/v/vi6xztbsq.css';
import '../../css/v/vh5fdjbhi.css';
import '../../css/x/xhsqmdbch.css';
import '../../css/v/vnjc76_8o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wzyky7bnb"/><path class="jpf6i3h8v"/><path class="m_rmalbye"/><path class="vi6xztbsq"/><path class="vh5fdjbhi"/><path class="xhsqmdbch"/><path class="vnjc76_8o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:crown-linear"} {...others} />);
}

export default Component;
