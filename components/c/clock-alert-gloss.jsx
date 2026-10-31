import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bfg1rzbjq.css';
import '../../css/l/lhgu-bogr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="bfg1rzbjq wm-k"/><path class="lhgu-bogr wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:clock-alert-gloss"} {...others} />);
}

export default Component;
