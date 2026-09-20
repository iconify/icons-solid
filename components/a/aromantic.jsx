import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wj4kgr0on.css';
import '../../css/g/gimv_nida.css';
import '../../css/g/gs_dd3j6j.css';
import '../../css/l/l33uf3b3d.css';
import '../../css/g/g4can7bsj.css';
import '../../css/p/paac-m4si.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<g class="wj4kgr0on"><path class="gimv_nida"/><path class="gs_dd3j6j"/><path class="l33uf3b3d"/><path class="g4can7bsj"/><path class="paac-m4si"/></g><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:aromantic"} {...others} />);
}

export default Component;
