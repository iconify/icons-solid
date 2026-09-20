import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/uh8nsabqb.css';
import '../../css/b/b8qhkbcan.css';
import '../../css/e/eayvs1m_n.css';
import '../../css/d/d_y_0lfcd.css';
import '../../css/s/srbmx6fzm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="uh8nsabqb"/><path class="b8qhkbcan"/><path class="eayvs1m_n"/><path class="d_y_0lfcd"/><path class="srbmx6fzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:playlist-minimalistic-3-linear"} {...others} />);
}

export default Component;
