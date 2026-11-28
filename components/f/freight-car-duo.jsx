import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u0e48abbt.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lfrb--gjy.css';
import '../../css/m/mz1560bnj.css';
import '../../css/i/ixbwkv4mz.css';
import '../../css/u/ur3_tunjd.css';
import '../../css/z/z0tnwqkof.css';
import '../../css/h/hbet5lb3f.css';
import '../../css/b/b_rls5bky.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="secondary u0e48abbt"/><g class="dt0cm9dhy primary"><path class="lfrb--gjy"/><path class="mz1560bnj"/><path class="ixbwkv4mz"/><path class="ur3_tunjd"/><path class="z0tnwqkof"/><path class="hbet5lb3f"/><path class="b_rls5bky"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:freight-car-duo"} {...others} />);
}

export default Component;
