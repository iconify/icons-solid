import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/srwktyvtj.css';
import '../../css/s/stlmuj5hc.css';
import '../../css/y/yu9s5hbaa.css';
import '../../css/e/e1jtfybva.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="srwktyvtj"/><path class="stlmuj5hc"/><path class="yu9s5hbaa"/><path class="e1jtfybva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:refresh-cw-sparkles-duotone"} {...others} />);
}

export default Component;
