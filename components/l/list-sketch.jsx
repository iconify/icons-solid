import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/n1es_rwco.css';
import '../../css/z/zso6h7bac.css';
import '../../css/a/a5_my2x1o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="n1es_rwco wm-k"/><path class="wm-k zso6h7bac"/><path class="a5_my2x1o wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:list-sketch"} {...others} />);
}

export default Component;
