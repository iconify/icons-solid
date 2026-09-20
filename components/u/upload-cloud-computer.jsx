import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yjnn37b9t.css';
import '../../css/o/okj8v9-pn.css';
import '../../css/p/pfupbf3qv.css';
import '../../css/i/izltot05b.css';
import '../../css/q/quahkz-eu.css';
import '../../css/q/qqb1k1z3k.css';
import '../../css/f/fdk_i3b8y.css';
import '../../css/i/igmhoeb_j.css';
import '../../css/w/w2wnlmb0u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yjnn37b9t"/><path class="okj8v9-pn"/><path class="pfupbf3qv"/><path class="izltot05b"/><path class="quahkz-eu"/><path class="qqb1k1z3k"/><path class="fdk_i3b8y"/><path class="igmhoeb_j"/><path class="w2wnlmb0u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:upload-cloud-computer"} {...others} />);
}

export default Component;
