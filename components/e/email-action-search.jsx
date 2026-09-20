import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ivr6k85sh.css';
import '../../css/t/txzeh5b2m.css';
import '../../css/g/gw2b5ibjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ivr6k85sh"/><path class="txzeh5b2m"/><path class="gw2b5ibjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:email-action-search"} {...others} />);
}

export default Component;
