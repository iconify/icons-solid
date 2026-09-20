import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/q/qihxq122b.css';
import '../../css/i/i6m3f_--p.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="qihxq122b"/><path class="i6m3f_--p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:inbox"} {...others} />);
}

export default Component;
