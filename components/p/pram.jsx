import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wiltxjbux.css';
import '../../css/c/c993p5b_v.css';
import '../../css/x/xie_wxh3s.css';
import '../../css/k/ky8v2r3zb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wiltxjbux"/><path class="c993p5b_v"/><path class="xie_wxh3s"/><path class="ky8v2r3zb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pram"} {...others} />);
}

export default Component;
