import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s43qqvbvc.css';
import '../../css/e/egcezsegq.css';
import '../../css/j/j_hcuie1x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="s43qqvbvc"/><path class="egcezsegq"/><path class="j_hcuie1x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:leaf"} {...others} />);
}

export default Component;
