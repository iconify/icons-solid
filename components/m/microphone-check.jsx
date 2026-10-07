import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_4x41bif.css';
import '../../css/f/fh-vz5swt.css';
import '../../css/w/wx-hfyb4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y_4x41bif"/><rect class="fh-vz5swt"/><path class="wx-hfyb4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:microphone-check"} {...others} />);
}

export default Component;
