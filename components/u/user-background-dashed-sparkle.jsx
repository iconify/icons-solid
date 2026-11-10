import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j4c0m_b8h.css';
import '../../css/e/ektua-b0m.css';
import '../../css/q/qz2u0-d3j.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="j4c0m_b8h"/><path class="ektua-b0m"/><path class="qz2u0-d3j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background-dashed-sparkle"} {...others} />);
}

export default Component;
