import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/i/i3wey7bro.css';
import '../../css/n/n9968vbuy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="i3wey7bro"/><path class="n9968vbuy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:blood-type"} {...others} />);
}

export default Component;
