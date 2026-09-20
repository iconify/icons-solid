import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iclz3tbzj.css';
import '../../css/b/b583_jbsq.css';
import '../../css/q/qxgmazbnx.css';
import '../../css/o/ocijzhb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iclz3tbzj"/><path class="b583_jbsq"/><path class="qxgmazbnx"/><path class="ocijzhb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:famous-character-starwars-r2d2"} {...others} />);
}

export default Component;
