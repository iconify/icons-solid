import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wzt-llnww.css';
import '../../css/x/x51y-mbde.css';
import '../../css/k/ki6btebfd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="wzt-llnww"/><path class="x51y-mbde"/><path class="ki6btebfd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:recycle-bin-2"} {...others} />);
}

export default Component;
