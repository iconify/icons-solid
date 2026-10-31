import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a7n48pb0g.css';
import '../../css/g/go6_41b5w.css';
import '../../css/j/jrwdhhbxi.css';
import '../../css/s/s2t1hg30u.css';
import '../../css/w/wmnmztb3w.css';
import '../../css/m/mfsmnc08k.css';
import '../../css/h/h8sppmskk.css';
import '../../css/x/xfhq_3bst.css';
import '../../css/y/yiizb0bde.css';
import '../../css/n/n6opzdbtx.css';
import '../../css/h/hebx7kbsl.css';
import '../../css/o/oaz5ytb_b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="a7n48pb0g"/><path class="go6_41b5w"/><path class="jrwdhhbxi"/><path class="s2t1hg30u"/><path class="wmnmztb3w"/><path class="mfsmnc08k"/><path class="h8sppmskk"/><path class="xfhq_3bst"/><path class="yiizb0bde"/><path class="n6opzdbtx"/><path class="hebx7kbsl"/><path class="oaz5ytb_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:databse-network-pop"} {...others} />);
}

export default Component;
