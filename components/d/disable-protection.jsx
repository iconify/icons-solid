import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/b1p3_qbzl.css';
import '../../css/y/y0m_bfepy.css';
import '../../css/n/n78qswbbt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="b1p3_qbzl"/><path class="y0m_bfepy"/><path class="n78qswbbt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:disable-protection"} {...others} />);
}

export default Component;
