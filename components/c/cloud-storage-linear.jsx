import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/y/ynz8pq65i.css';
import '../../css/p/p22a86b8e.css';
import '../../css/k/kbry1wb0i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ynz8pq65i"/><path class="p22a86b8e"/><path class="kbry1wb0i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:cloud-storage-linear"} {...others} />);
}

export default Component;
