import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/khy8p4b-y.css';
import '../../css/g/gmzwbacmo.css';
import '../../css/v/v7peg9b3t.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="khy8p4b-y"/><path class="gmzwbacmo wm-k"/><path class="v7peg9b3t wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:settings-sketch"} {...others} />);
}

export default Component;
