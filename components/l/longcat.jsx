import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1mjunbsu.css';
import '../../css/g/gpzc3kb_a.css';
import '../../css/x/x-l1-u4wm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1mjunbsu"><path clip-rule="evenodd" class="gpzc3kb_a"/><path class="x-l1-u4wm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:longcat"} {...others} />);
}

export default Component;
