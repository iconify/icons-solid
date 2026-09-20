import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erxv7gxee.css';
import '../../css/m/mpm62gb7s.css';
import '../../css/k/kt1_i_bds.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="erxv7gxee"/><path class="mpm62gb7s"/><path class="kt1_i_bds"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:egg"} {...others} />);
}

export default Component;
