import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ihsxy00ij.css';
import '../../css/f/f4wfyq6uy.css';
import '../../css/g/ge4w31dgz.css';
import '../../css/v/v178z7v7c.css';
import '../../css/n/nm2raetgr.css';
import '../../css/a/ayts_4bzb.css';
import '../../css/d/d31n5fbdw.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="ihsxy00ij"/><path class="f4wfyq6uy"/><path class="ge4w31dgz"/><path class="v178z7v7c"/><path class="nm2raetgr"/><path class="ayts_4bzb"/><path class="d31n5fbdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:national-park"} {...others} />);
}

export default Component;
