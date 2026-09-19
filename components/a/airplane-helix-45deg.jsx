import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ufie9ebgy.css';
import '../../css/l/llp5f-z2n.css';
import '../../css/w/w-mce9o4q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ufie9ebgy"><path class="llp5f-z2n"/><path clip-rule="evenodd" class="w-mce9o4q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:airplane-helix-45deg"} {...others} />);
}

export default Component;
