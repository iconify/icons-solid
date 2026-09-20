import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/y/yaasi6hps.css';
import '../../css/p/p85yxxb5a.css';
import '../../css/z/zwuptyfnt.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="yaasi6hps"/><path class="p85yxxb5a"/><path class="zwuptyfnt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:network-monitor-team-1"} {...others} />);
}

export default Component;
