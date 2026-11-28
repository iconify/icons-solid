import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/h/h1ma72bft.css';
import '../../css/l/llr9rqbjq.css';
import '../../css/d/dq60wlbxs.css';
import '../../css/b/b9him6jfk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="h1ma72bft"/><path class="llr9rqbjq"/><path class="dq60wlbxs"/><path class="b9him6jfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:mail-cog"} {...others} />);
}

export default Component;
