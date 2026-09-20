import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/giv7jfb2r.css';
import '../../css/n/naeprdbjc.css';
import '../../css/w/wqgqq1heg.css';
import '../../css/w/wju7febkn.css';
import '../../css/i/ih2325bte.css';
import '../../css/e/eo_z8rbsn.css';
import '../../css/q/q4_6accml.css';
import '../../css/d/dmzcnyugr.css';
import '../../css/z/zie1bdb6d.css';
import '../../css/e/e4zfowz9r.css';

const viewBox = {"width":72,"height":72};
const content = `<path clip-rule="evenodd" class="giv7jfb2r"/><path class="naeprdbjc"/><path class="wqgqq1heg"/><path class="wju7febkn"/><path class="ih2325bte"/><path class="eo_z8rbsn"/><path class="q4_6accml"/><path class="dmzcnyugr"/><path class="zie1bdb6d"/><path class="e4zfowz9r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:input-latin-uppercase"} {...others} />);
}

export default Component;
