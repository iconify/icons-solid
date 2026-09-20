import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zos92rv0b.css';
import '../../css/q/qr3pchbrt.css';
import '../../css/t/tx_ynpbcw.css';
import '../../css/b/bvt1qdb-o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="zos92rv0b"/><path class="qr3pchbrt"/><path clip-rule="evenodd" class="tx_ynpbcw"/><path class="bvt1qdb-o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:crab-duo"} {...others} />);
}

export default Component;
