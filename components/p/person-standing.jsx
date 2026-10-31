import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/y/y2vw-xvoy.css';
import '../../css/b/b5jcl5blk.css';
import '../../css/x/xk6eoibzj.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="y2vw-xvoy"/><path class="b5jcl5blk wm-k"/><path class="wm-a xk6eoibzj"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:person-standing"} {...others} />);
}

export default Component;
