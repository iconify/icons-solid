import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n9_hsyb7y.css';
import '../../css/q/qpe0g6bpw.css';
import '../../css/y/yyuxwrost.css';
import '../../css/a/a2lggtgcv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="n9_hsyb7y wm-shadow"/><path class="qpe0g6bpw wm-shadow"/><path class="yyuxwrost"/><path class="a2lggtgcv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:alarm-clock"} {...others} />);
}

export default Component;
