import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rm2f6m50i.css';
import '../../css/u/ur2dqubrf.css';
import '../../css/g/gn22t04kr.css';
import '../../css/z/zepskkb7t.css';
import '../../css/n/nqjaz5b0x.css';
import '../../css/h/h6p5tpnlv.css';
import '../../css/v/v568ejbqc.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="rm2f6m50i"/><path class="ur2dqubrf"/><path class="gn22t04kr"/><path class="zepskkb7t"/><path class="nqjaz5b0x"/><path class="h6p5tpnlv"/><path class="v568ejbqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:man"} {...others} />);
}

export default Component;
