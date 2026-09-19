import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/wgssgdcin.css';
import '../../css/i/i7yqh0b7c.css';
import '../../css/e/e1_julwfp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="wgssgdcin"/><path class="i7yqh0b7c"/><path class="e1_julwfp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-user-01"} {...others} />);
}

export default Component;
