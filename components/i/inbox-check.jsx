import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/h/hxo2p_vlt.css';
import '../../css/x/xknbt5ism.css';
import '../../css/a/ak7meacck.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="hxo2p_vlt"/><path class="xknbt5ism"/><path class="ak7meacck"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:inbox-check"} {...others} />);
}

export default Component;
