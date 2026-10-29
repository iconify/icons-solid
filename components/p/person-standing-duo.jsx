import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/q9h9q57wp.css';
import '../../css/x/xk6eoibzj.css';
import '../../css/b/b5jcl5blk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="q9h9q57wp"/><path class="wm-a xk6eoibzj"/><path class="b5jcl5blk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-standing-duo"} {...others} />);
}

export default Component;
