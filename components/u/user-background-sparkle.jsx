import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4c0m_b8h.css';
import '../../css/j/j9652o1qc.css';
import '../../css/q/qz2u0-d3j.css';
import '../../css/s/sl7bx3b5l.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j4c0m_b8h"/><path class="j9652o1qc"/><path class="qz2u0-d3j"/><path class="sl7bx3b5l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background-sparkle"} {...others} />);
}

export default Component;
