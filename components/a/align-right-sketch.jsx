import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ed_4l_bdm.css';
import '../../css/b/b-p_nwbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="ed_4l_bdm"/><path class="b-p_nwbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:align-right-sketch"} {...others} />);
}

export default Component;
