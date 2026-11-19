import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uk1ofbcwo.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/h/hxg04hcvc.css';
import '../../css/p/ppmtcccfb.css';
import '../../css/w/w7-r3tbge.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="uk1ofbcwo"/><path class="b_-gkxb7l"/><path class="hxg04hcvc"/><path class="ppmtcccfb"/><path class="w7-r3tbge"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-heart"} {...others} />);
}

export default Component;
