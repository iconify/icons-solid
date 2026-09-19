import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/b/bfcep9bgt.css';
import '../../css/o/oow-rkuph.css';
import '../../css/n/n8xx8xp7w.css';
import '../../css/i/iayoicczx.css';
import '../../css/d/dh5y7-b3e.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="bfcep9bgt"/><path class="oow-rkuph"/><path class="n8xx8xp7w"/><circle class="iayoicczx"/><path class="dh5y7-b3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-rn"} {...others} />);
}

export default Component;
