import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msuw89b-f.css';
import '../../css/n/nuybhrmtf.css';
import '../../css/s/sd9djh1wk.css';
import '../../css/h/h6rk2k5xn.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="msuw89b-f"/><path class="nuybhrmtf"/><path class="sd9djh1wk"/><path class="h6rk2k5xn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:redhat-wordmark"} {...others} />);
}

export default Component;
