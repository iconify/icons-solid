import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ig88j0zen.css';
import '../../css/d/d6l1v3bwk.css';
import '../../css/o/o5u_ysb-d.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="ig88j0zen"/><path class="d6l1v3bwk"/><path class="o5u_ysb-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon:elasticsearch"} {...others} />);
}

export default Component;
