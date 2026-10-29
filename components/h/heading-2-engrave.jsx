import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jgxljyz3r.css';
import '../../css/w/wqpjdjb2g.css';
import '../../css/d/d042wtbft.css';
import '../../css/j/jk7-vabxq.css';
import '../../css/e/ejg_wxkov.css';
import '../../css/x/xa3jgydgh.css';
import '../../css/m/m22vscbur.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="jgxljyz3r wm-k"/><path class="wm-a wqpjdjb2g"/><path class="d042wtbft wm-s"/><path class="jk7-vabxq wm-shadow"/><path class="ejg_wxkov wm-k"/><path class="wm-a xa3jgydgh"/><path class="m22vscbur wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heading-2-engrave"} {...others} />);
}

export default Component;
