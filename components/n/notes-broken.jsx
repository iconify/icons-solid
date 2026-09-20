import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/da3rcub4c.css';
import '../../css/c/coyhggb-v.css';
import '../../css/n/ncaw82bqt.css';
import '../../css/h/h995enbdd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="da3rcub4c"/><path class="coyhggb-v"/><path class="ncaw82bqt"/><path class="h995enbdd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notes-broken"} {...others} />);
}

export default Component;
