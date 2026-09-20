import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/x/x034o0b6t.css';
import '../../css/y/y8yz8vb1q.css';
import '../../css/q/q_7-mdb-w.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/t/tces97bfk.css';
import '../../css/h/hlnkbbagq.css';
import '../../css/x/xy71nlbgl.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><rect class="x034o0b6t"/><rect class="y8yz8vb1q"/><rect class="q_7-mdb-w"/></g><g class="c-zrgpb5l"><path class="tces97bfk"/><path class="hlnkbbagq"/><circle class="xy71nlbgl"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:colorado-flag"} {...others} />);
}

export default Component;
