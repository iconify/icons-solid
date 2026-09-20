import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/n/nborjbb0w.css';
import '../../css/r/r1eu37-tn.css';
import '../../css/o/ovllxtblr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="nborjbb0w"/><path class="r1eu37-tn"/><path class="ovllxtblr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:people-nearby-broken"} {...others} />);
}

export default Component;
