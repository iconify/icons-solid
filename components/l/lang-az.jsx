import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bc1fd0lxe.css';
import '../../css/s/s6a5qcbmu.css';
import '../../css/g/g2p0iwbvv.css';
import '../../css/v/va-am1pst.css';
import '../../css/l/l5c1x-pnh.css';
import '../../css/j/j3tn0qbsz.css';
import '../../css/e/e54gbh12w.css';

const viewBox = {"width":512,"height":512};
const content = `<mask id="SVGuywqVbel"><circle class="bc1fd0lxe"/></mask><g mask="url(#SVGuywqVbel)"><path class="s6a5qcbmu"/><path class="g2p0iwbvv"/><path class="va-am1pst"/><g class="l5c1x-pnh"><path class="j3tn0qbsz"/><path class="e54gbh12w"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"circle-flags:lang-az"} {...others} />);
}

export default Component;
