import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/esx2m_bgj.css';
import '../../css/k/kq63r2b2y.css';
import '../../css/h/hr0zsab8t.css';
import '../../css/b/bidljcb4r.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="esx2m_bgj"/><path class="kq63r2b2y"/><path class="hr0zsab8t"/><path class="bidljcb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:calendar"} {...others} />);
}

export default Component;
