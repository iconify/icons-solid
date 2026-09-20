import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cd_cu65rn.css';
import '../../css/e/ekm_zwjkh.css';
import '../../css/c/c8f-3kbuu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cd_cu65rn"/><path class="ekm_zwjkh"/><path class="c8f-3kbuu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smart-watch-square-bell-alternate"} {...others} />);
}

export default Component;
