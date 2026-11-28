import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nk_z0sbwn.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wt5ycxxxi.css';
import '../../css/w/wi0btuoim.css';
import '../../css/h/h5khc0v2w.css';
import '../../css/f/f2i__-d5f.css';
import '../../css/n/net2tcc0h.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nk_z0sbwn secondary"/><g class="dt0cm9dhy primary"><path class="wt5ycxxxi"/><path class="wi0btuoim"/><path class="h5khc0v2w"/><path class="f2i__-d5f"/><path class="net2tcc0h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:app-window-check-duo"} {...others} />);
}

export default Component;
