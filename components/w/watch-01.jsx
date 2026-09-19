import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f_362pbxn.css';
import '../../css/p/pqb0a8b9a.css';
import '../../css/z/zr7knrf6z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><circle class="f_362pbxn"/><path class="pqb0a8b9a"/><path class="zr7knrf6z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:watch-01"} {...others} />);
}

export default Component;
