import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/w/wle5dvxyu.css';
import '../../css/x/x388f951g.css';
import '../../css/k/kb_1rltuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="wle5dvxyu"/><path class="x388f951g"/><path class="kb_1rltuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:kick-scooter-line-duotone"} {...others} />);
}

export default Component;
