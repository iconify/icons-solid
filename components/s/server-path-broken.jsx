import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c1hkhtbrr.css';
import '../../css/q/q-xlmac1a.css';
import '../../css/z/zopjch_2q.css';
import '../../css/v/v7ennvywx.css';
import '../../css/l/l1aw04d5b.css';
import '../../css/d/do-vovbeq.css';
import '../../css/g/gqsddbcer.css';
import '../../css/p/p7fs_qxcd.css';
import '../../css/v/vtj68-i3x.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c1hkhtbrr"/><path class="q-xlmac1a"/><circle class="zopjch_2q"/><path class="v7ennvywx"/><path class="l1aw04d5b"/><path class="do-vovbeq"/><path class="gqsddbcer"/><path class="p7fs_qxcd"/><path class="vtj68-i3x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:server-path-broken"} {...others} />);
}

export default Component;
