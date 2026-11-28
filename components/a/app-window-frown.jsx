import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/w/wt5ycxxxi.css';
import '../../css/w/wi0btuoim.css';
import '../../css/h/h5khc0v2w.css';
import '../../css/f/f2i__-d5f.css';
import '../../css/y/y8kawgzac.css';
import '../../css/i/ipjluqpgd.css';
import '../../css/r/r9idgibyp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="wt5ycxxxi"/><path class="wi0btuoim"/><path class="h5khc0v2w"/><path class="f2i__-d5f"/><path class="y8kawgzac"/><path class="ipjluqpgd"/><path class="r9idgibyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:app-window-frown"} {...others} />);
}

export default Component;
