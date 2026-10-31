import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/o/ofj54sh_v.css';
import '../../css/f/flcymhbrn.css';
import '../../css/q/qsdcmru0s.css';
import '../../css/x/xp3w7zuxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ofj54sh_v wm-shadow"/><path class="flcymhbrn wm-shadow"/><path class="qsdcmru0s"/><path class="xp3w7zuxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:message-square-plus"} {...others} />);
}

export default Component;
