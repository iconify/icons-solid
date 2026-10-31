import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/arptzobve.css';
import '../../css/r/rjhgfzb6j.css';
import '../../css/u/ult2fuibs.css';
import '../../css/t/tx_e_weto.css';
import '../../css/n/nakdvqb2h.css';
import '../../css/g/g2kfhjb2m.css';
import '../../css/t/tnxglzbxu.css';
import '../../css/u/u9iiitp4d.css';
import '../../css/x/xrco7g5rn.css';
import '../../css/b/b2jt-8w8l.css';
import '../../css/h/ho8_g8bjs.css';
import '../../css/y/yw7ibibga.css';
import '../../css/o/omn5j1b8y.css';

const viewBox = {"width":30,"height":24};
const content = `<path class="arptzobve"/><path class="rjhgfzb6j"/><path class="ult2fuibs"/><path class="tx_e_weto"/><path class="nakdvqb2h"/><path class="g2kfhjb2m"/><path class="tnxglzbxu"/><path class="u9iiitp4d"/><path class="xrco7g5rn"/><path class="b2jt-8w8l"/><path class="ho8_g8bjs"/><path class="yw7ibibga"/><path class="omn5j1b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler-flags:san-marino"} {...others} />);
}

export default Component;
