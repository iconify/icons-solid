import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uiyujt59u.css';
import '../../css/m/md286fbip.css';
import '../../css/y/ylooah_cw.css';
import '../../css/r/r593vmbug.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><circle class="uiyujt59u"/><g class="md286fbip"><path class="ylooah_cw"/><path class="r593vmbug"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:wicc"} {...others} />);
}

export default Component;
