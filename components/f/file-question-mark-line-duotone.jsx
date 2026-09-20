import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqzhvubby.css';
import '../../css/u/uci_x5bkd.css';
import '../../css/u/u5asp4b2e.css';
import '../../css/z/zr35ecbmr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aqzhvubby"/><path class="uci_x5bkd"/><path class="u5asp4b2e"/><path class="zr35ecbmr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:file-question-mark-line-duotone"} {...others} />);
}

export default Component;
