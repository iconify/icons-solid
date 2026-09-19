import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/ml3vkx56u.css';
import '../../css/d/dc2c0qyzp.css';
import '../../css/w/w83s4xb3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="ml3vkx56u"/><path class="dc2c0qyzp"/><path class="w83s4xb3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:folder-shared-01"} {...others} />);
}

export default Component;
