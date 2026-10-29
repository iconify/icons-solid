import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a4k33ccyu.css';
import '../../css/d/dbt0womht.css';
import '../../css/e/eyae61b2f.css';
import '../../css/p/pipsvs8ca.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="a4k33ccyu"/><path class="dbt0womht wm-a"/><path class="eyae61b2f wm-k"/><path class="pipsvs8ca wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:balloon-sketch"} {...others} />);
}

export default Component;
