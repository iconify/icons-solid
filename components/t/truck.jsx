import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yzik_ib5f.css';
import '../../css/h/heyab7big.css';
import '../../css/p/pfdln_tgy.css';
import '../../css/o/o4zzqkbgz.css';
import '../../css/m/mz6m6-b7a.css';

const viewBox = {"width":20,"height":20};
const content = `<g class="cuyn6tgcc"><path class="yzik_ib5f"/><path clip-rule="evenodd" class="heyab7big"/><path class="pfdln_tgy"/><path clip-rule="evenodd" class="o4zzqkbgz"/><path class="mz6m6-b7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons:truck"} {...others} />);
}

export default Component;
