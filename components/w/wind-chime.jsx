import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0_nt9b-f.css';
import '../../css/s/sgotng7af.css';
import '../../css/t/ty2nnjbmu.css';
import '../../css/w/w92x9dbux.css';
import '../../css/g/gni2smbso.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="e0_nt9b-f"/><path class="sgotng7af"/><path class="ty2nnjbmu"/><path class="w92x9dbux"/><path class="gni2smbso"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:wind-chime"} {...others} />);
}

export default Component;
