import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hnsc5ccym.css';
import '../../css/g/g7z1o33yi.css';
import '../../css/q/q_kfvnbxk.css';
import '../../css/g/grp9m_10s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hnsc5ccym"/><rect class="g7z1o33yi"/><rect class="q_kfvnbxk"/><rect class="grp9m_10s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"majesticons:checkbox-list-line"} {...others} />);
}

export default Component;
