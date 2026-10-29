import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mk_-umbdn.css';
import '../../css/g/gz_6osb0u.css';
import '../../css/q/q8kytp3oj.css';
import '../../css/j/ju9gw_pai.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="mk_-umbdn wm-k"/><path class="gz_6osb0u wm-k"/><path class="q8kytp3oj wm-k"/><path class="ju9gw_pai wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:pipette-sketch"} {...others} />);
}

export default Component;
