import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nv-a6333b.css';
import '../../css/q/qdwz4_yyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="nv-a6333b"/><path class="qdwz4_yyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:short-pants-pockets"} {...others} />);
}

export default Component;
