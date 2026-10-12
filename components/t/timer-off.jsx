import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-5gahbyk.css';
import '../../css/o/ollo1vbxs.css';
import '../../css/g/gzn0f_y-a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="i-5gahbyk"/><circle class="ollo1vbxs"/><path class="gzn0f_y-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:timer-off"} {...others} />);
}

export default Component;
