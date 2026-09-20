import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ii09ulbxz.css';
import '../../css/t/t-_lz9byc.css';
import '../../css/d/dypaabdnq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ii09ulbxz"/><path class="t-_lz9byc"/><path class="dypaabdnq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:composition-paronama-horizontal"} {...others} />);
}

export default Component;
