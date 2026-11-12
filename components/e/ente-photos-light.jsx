import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ri3z_o84b.css';
import '../../css/d/dghaoubtt.css';
import '../../css/f/fu8qg7bvm.css';
import '../../css/f/f4-o-bcct.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ri3z_o84b"/><path class="dghaoubtt"/><path class="fu8qg7bvm"/><path class="f4-o-bcct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ente-photos-light"} {...others} />);
}

export default Component;
