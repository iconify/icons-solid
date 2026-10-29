import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/nf1sxrb8v.css';
import '../../css/f/fmyq8ctie.css';
import '../../css/z/zi3qf8bqd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="nf1sxrb8v"/><path class="fmyq8ctie wm-k"/><path class="wm-a zi3qf8bqd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:candy-cane-sketch"} {...others} />);
}

export default Component;
