import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vh_nj_bik.css';
import '../../css/y/yfbdwob5o.css';
import '../../css/y/yo40yrbuz.css';
import '../../css/c/ce9c_jbll.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="vh_nj_bik"/><path class="yfbdwob5o"/><path class="yo40yrbuz"/><path class="ce9c_jbll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:slack"} {...others} />);
}

export default Component;
