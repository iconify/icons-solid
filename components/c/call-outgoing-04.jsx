import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j_u3vybip.css';
import '../../css/t/t5j98hf7w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="j_u3vybip"/><path class="t5j98hf7w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:call-outgoing-04"} {...others} />);
}

export default Component;
