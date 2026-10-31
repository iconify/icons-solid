import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/u/uotfaqh-j.css';
import '../../css/x/x-cgasewb.css';
import '../../css/z/z86wj-6ot.css';
import '../../css/r/rpxw3px3z.css';
import '../../css/w/wwpcapzcc.css';
import '../../css/o/ooip3acqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="uotfaqh-j wm-shadow"/><path class="wm-shadow x-cgasewb"/><path class="z86wj-6ot"/><path class="rpxw3px3z"/><path class="wwpcapzcc"/><path class="ooip3acqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:binoculars"} {...others} />);
}

export default Component;
