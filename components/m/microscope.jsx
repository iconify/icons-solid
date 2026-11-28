import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/zoy-x7b7l.css';
import '../../css/k/k3v_7i9yz.css';
import '../../css/v/vj5zhhwof.css';
import '../../css/i/i_in_v1io.css';
import '../../css/x/xf5fvyrdp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="zoy-x7b7l"/><path class="k3v_7i9yz"/><path class="vj5zhhwof"/><path class="i_in_v1io"/><path class="xf5fvyrdp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:microscope"} {...others} />);
}

export default Component;
