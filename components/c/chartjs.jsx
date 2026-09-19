import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ftpedcbgb.css';
import '../../css/a/ai4ebubxr.css';
import '../../css/i/i3dab3_cs.css';
import '../../css/w/wfceq4bwa.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ftpedcbgb"/><path class="ai4ebubxr"/><path class="i3dab3_cs"/><path class="wfceq4bwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:chartjs"} {...others} />);
}

export default Component;
