import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/grn2dmi1u.css';
import '../../css/w/w3gwwkbtr.css';
import '../../css/f/f8y69dn1k.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="grn2dmi1u"/><path class="w3gwwkbtr"/><path class="f8y69dn1k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:business-metaphor-burn-money"} {...others} />);
}

export default Component;
