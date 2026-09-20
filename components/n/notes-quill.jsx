import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qoh9i_b1g.css';
import '../../css/h/ham1s0bpn.css';
import '../../css/c/cdbmygnqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qoh9i_b1g"/><path class="ham1s0bpn"/><path class="cdbmygnqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:notes-quill"} {...others} />);
}

export default Component;
