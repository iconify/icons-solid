import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd1qm_b3a.css';
import '../../css/y/yazvhwbdd.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/n/nzou8ob_j.css';
import '../../css/g/gmr0k3f_y.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="hd1qm_b3a"/><path class="yazvhwbdd"/><g class="jn8qy4bru"><path class="nzou8ob_j"/><path class="gmr0k3f_y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:open-file-folder"} {...others} />);
}

export default Component;
