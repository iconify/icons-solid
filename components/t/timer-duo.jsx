import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a25a8xd8u.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/x/xqqfukbrn.css';
import '../../css/r/ruk7zkq5c.css';
import '../../css/c/c_6ppe0-z.css';
import '../../css/x/x1il4v3ex.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="a25a8xd8u secondary"/><g class="dt0cm9dhy primary"><circle class="xqqfukbrn"/><path class="ruk7zkq5c"/><path class="c_6ppe0-z"/><path class="x1il4v3ex"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:timer-duo"} {...others} />);
}

export default Component;
