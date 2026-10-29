import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g9vy49b-z.css';
import '../../css/q/q2wvs4bqc.css';
import '../../css/v/vlx6jfb0c.css';
import '../../css/r/rnub8cchp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="g9vy49b-z"/><path class="q2wvs4bqc wm-a"/><path class="vlx6jfb0c wm-k"/><path class="rnub8cchp wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:bread-sketch"} {...others} />);
}

export default Component;
