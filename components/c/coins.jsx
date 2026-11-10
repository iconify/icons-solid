import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fcpug8qfn.css';
import '../../css/i/i4gf_wb7q.css';
import '../../css/m/m_hxi5hql.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="fcpug8qfn"/><path class="i4gf_wb7q"/><path class="m_hxi5hql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:coins"} {...others} />);
}

export default Component;
