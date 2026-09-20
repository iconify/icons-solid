import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ll29zwxkp.css';
import '../../css/l/li-08qb4y.css';
import '../../css/l/lip2wgr-f.css';
import '../../css/k/k8vjp8bic.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="ll29zwxkp"/><path class="li-08qb4y"/><path class="lip2wgr-f"/><path class="k8vjp8bic"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:chromecast-1"} {...others} />);
}

export default Component;
