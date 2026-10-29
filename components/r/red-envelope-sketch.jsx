import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ukwaa1bgs.css';
import '../../css/j/jq_nbg_-b.css';
import '../../css/s/seygyos_t.css';
import '../../css/n/neu8gqbky.css';
import '../../css/m/mqjsavxui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ukwaa1bgs"/><path class="jq_nbg_-b wm-a"/><path class="seygyos_t wm-k"/><path class="neu8gqbky wm-a"/><path class="mqjsavxui wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:red-envelope-sketch"} {...others} />);
}

export default Component;
