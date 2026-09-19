import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/ow2ql5bqu.css';
import '../../css/d/d250fdbcq.css';
import '../../css/o/onl5habgw.css';
import '../../css/n/nhmm4pbny.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="cuyn6tgcc"><path class="ow2ql5bqu"/><path clip-rule="evenodd" class="d250fdbcq"/><path class="onl5habgw"/><path clip-rule="evenodd" class="nhmm4pbny"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:nurse2x-outline"} {...others} />);
}

export default Component;
