import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/n88vbsbjg.css';
import '../../css/m/mip9dyati.css';
import '../../css/t/t6hn4757e.css';
import '../../css/o/o25cc4zjh.css';
import '../../css/e/erfnpl34n.css';
import '../../css/e/eqq7qcbsj.css';
import '../../css/c/cbgjv17zn.css';
import '../../css/s/s--_k5mpq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="n88vbsbjg"/><path class="mip9dyati"/><path class="t6hn4757e wm-shine"/><path class="o25cc4zjh wm-k"/><path class="erfnpl34n wm-a"/><path class="eqq7qcbsj"/><path class="cbgjv17zn"/><path class="s--_k5mpq wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:stocking"} {...others} />);
}

export default Component;
