import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopnm44um.css';
import '../../css/v/vsn935b9w.css';
import '../../css/m/m0dfabbup.css';
import '../../css/p/p2y6c2b_r.css';
import '../../css/r/rq4zuv90f.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="gopnm44um"><path class="vsn935b9w"/><path class="m0dfabbup"/><path class="p2y6c2b_r"/><path class="rq4zuv90f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:message-one"} {...others} />);
}

export default Component;
