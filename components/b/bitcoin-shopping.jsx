import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wkje7hb8n.css';
import '../../css/p/pg7s9yb5j.css';
import '../../css/q/qozo6tb2l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wkje7hb8n"/><path class="pg7s9yb5j"/><path class="qozo6tb2l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:bitcoin-shopping"} {...others} />);
}

export default Component;
