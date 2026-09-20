import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h-rnrksvw.css';
import '../../css/m/mqng4z9_o.css';
import '../../css/w/w94s4ta-o.css';
import '../../css/m/m9-oyt5vh.css';
import '../../css/d/dqc3sju1w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="h-rnrksvw"/><path class="mqng4z9_o"/><path class="w94s4ta-o"/><path class="m9-oyt5vh"/><path class="dqc3sju1w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:messages-logo"} {...others} />);
}

export default Component;
