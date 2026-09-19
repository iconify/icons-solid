import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w83s4xb3u.css';
import '../../css/f/ft-x5jtvc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="w83s4xb3u"/><path class="ft-x5jtvc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-locked"} {...others} />);
}

export default Component;
