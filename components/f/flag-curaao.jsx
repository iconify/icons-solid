import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/codjm1acu.css';
import '../../css/k/kxwpsgb3y.css';
import '../../css/m/mwd0dodcu.css';
import '../../css/q/qhkx3jbxs.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="codjm1acu"/><path class="kxwpsgb3y"/><path class="mwd0dodcu"/><path class="qhkx3jbxs"/><g><path class="qy525jbwx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-curaao"} {...others} />);
}

export default Component;
