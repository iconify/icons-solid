import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rcbr38blk.css';
import '../../css/b/bjqk9ebtq.css';
import '../../css/x/xrbno9bto.css';
import '../../css/b/be9t2hndj.css';
import '../../css/m/myrp_qwdl.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="rcbr38blk"/><path clip-rule="evenodd" class="bjqk9ebtq"/><path class="xrbno9bto"/><path class="be9t2hndj"/><path class="myrp_qwdl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:one-vesus-one"} {...others} />);
}

export default Component;
