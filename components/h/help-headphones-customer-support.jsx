import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/smejc0biy.css';
import '../../css/b/b-xn-5bdz.css';
import '../../css/q/q633_jb8m.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="smejc0biy"/><path class="b-xn-5bdz"/><path class="q633_jb8m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:help-headphones-customer-support"} {...others} />);
}

export default Component;
