import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cogyhpbeg.css';
import '../../css/f/fa6cet7bu.css';
import '../../css/v/vvehkvu_h.css';
import '../../css/x/x_g42obzo.css';
import '../../css/q/qt9lwjbfz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cogyhpbeg wm-k"/><path class="fa6cet7bu wm-k"/><path class="vvehkvu_h wm-a"/><path class="wm-k x_g42obzo"/><path class="qt9lwjbfz wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:person-running"} {...others} />);
}

export default Component;
