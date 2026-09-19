import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j_qw5gr9p.css';
import '../../css/y/yrfreqb-s.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j_qw5gr9p"/><path class="yrfreqb-s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:external-link"} {...others} />);
}

export default Component;
