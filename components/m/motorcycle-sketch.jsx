import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hgykuurez.css';
import '../../css/w/w18n-2bbj.css';
import '../../css/e/eojrhrb4s.css';
import '../../css/m/manj_xg0q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hgykuurez wm-k"/><path class="w18n-2bbj wm-a"/><path class="eojrhrb4s wm-k"/><path class="manj_xg0q wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:motorcycle-sketch"} {...others} />);
}

export default Component;
