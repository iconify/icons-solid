import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/htkywbcej.css';
import '../../css/e/eqo6v13mi.css';
import '../../css/w/w4giizb1e.css';
import '../../css/q/q5bla5t6u.css';
import '../../css/z/ziky4ab_i.css';
import '../../css/e/e9wqqffiv.css';
import '../../css/h/h26hx985n.css';
import '../../css/x/x8hgqsbhk.css';
import '../../css/b/bzfuiwbgo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="htkywbcej"/><path class="eqo6v13mi"/><path class="w4giizb1e"/><path class="q5bla5t6u"/><path class="ziky4ab_i"/><path class="e9wqqffiv"/><path class="h26hx985n"/><path class="x8hgqsbhk"/><path class="bzfuiwbgo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:adhesive-plaster-line-duotone"} {...others} />);
}

export default Component;
