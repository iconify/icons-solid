import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/ns7jo5bxj.css';
import '../../css/f/fa-9vwbam.css';
import '../../css/w/w517zzo6n.css';
import '../../css/t/t-ks99bsq.css';
import '../../css/o/ovv33ebjl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="ns7jo5bxj wm-shadow"/><path class="fa-9vwbam wm-shadow"/><path class="w517zzo6n"/><path class="t-ks99bsq"/><path class="ovv33ebjl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rewind"} {...others} />);
}

export default Component;
