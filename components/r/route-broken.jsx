import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/w42iuxbof.css';
import '../../css/p/pmzn7ofxe.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="w42iuxbof"/><path class="pmzn7ofxe"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:route-broken"} {...others} />);
}

export default Component;
