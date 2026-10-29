import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/an2q472qx.css';
import '../../css/b/b2ob7rojk.css';
import '../../css/p/p3u_m9_oc.css';
import '../../css/b/b4mcopbsp.css';
import '../../css/w/wlg8mzbvw.css';
import '../../css/c/c99qrlbde.css';
import '../../css/h/hqb750bvo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="an2q472qx"/><path class="b2ob7rojk"/><path class="p3u_m9_oc"/><path class="b4mcopbsp"/><path class="wlg8mzbvw"/><path class="c99qrlbde"/><path class="hqb750bvo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:git-merge"} {...others} />);
}

export default Component;
