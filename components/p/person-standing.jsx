import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/b5jcl5blk.css';
import '../../css/x/xk6eoibzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="b5jcl5blk"/><path class="wm-a xk6eoibzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:person-standing"} {...others} />);
}

export default Component;
