import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/ge-usbc4v.css';
import '../../css/h/h18c3wshh.css';

const viewBox = {"width":100,"height":100};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="ge-usbc4v"/><path class="h18c3wshh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:social-500px"} {...others} />);
}

export default Component;
