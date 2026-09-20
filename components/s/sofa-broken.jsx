import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aiu2dac3q.css';
import '../../css/k/kpcjxbbzl.css';
import '../../css/n/ncb20ka2n.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="aiu2dac3q"/><path class="kpcjxbbzl"/><path class="ncb20ka2n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sofa-broken"} {...others} />);
}

export default Component;
