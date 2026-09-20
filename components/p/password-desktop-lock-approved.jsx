import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t7hll3puf.css';
import '../../css/o/o0wdmnr6y.css';
import '../../css/l/lxutucssu.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t7hll3puf"/><path class="o0wdmnr6y"/><path class="lxutucssu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:password-desktop-lock-approved"} {...others} />);
}

export default Component;
