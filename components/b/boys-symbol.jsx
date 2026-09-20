import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mrks0fbpf.css';
import '../../css/d/doeb2ib7n.css';
import '../../css/x/xhk3xvr4u.css';
import '../../css/i/in-tozufp.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/n8gu1ebhy.css';
import '../../css/a/amrud_b6t.css';
import '../../css/f/f4ynodbvo.css';
import '../../css/i/i1husubzm.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="mrks0fbpf"/><circle class="doeb2ib7n"/><path class="xhk3xvr4u"/><path class="in-tozufp"/><g class="jn8qy4bru"><path class="n8gu1ebhy"/><circle class="amrud_b6t"/><path class="f4ynodbvo"/><path class="i1husubzm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:boys-symbol"} {...others} />);
}

export default Component;
