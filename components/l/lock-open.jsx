import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m_chvgbem.css';
import '../../css/w/wj6opsb2q.css';
import '../../css/i/ismhnnbgi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="m_chvgbem"/><path clip-rule="evenodd" class="wj6opsb2q"/><path class="ismhnnbgi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:lock-open"} {...others} />);
}

export default Component;
