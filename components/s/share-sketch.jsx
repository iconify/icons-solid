import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sa3sy8x8r.css';
import '../../css/q/q_qo_wbme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sa3sy8x8r"/><path class="q_qo_wbme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:share-sketch"} {...others} />);
}

export default Component;
