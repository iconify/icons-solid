import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zfu1m_b5p.css';
import '../../css/l/l4t549b2p.css';
import '../../css/k/kqx6pqw0w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="zfu1m_b5p"/><path class="l4t549b2p wm-a"/><path class="kqx6pqw0w wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:mouse-pointer-click-solid"} {...others} />);
}

export default Component;
