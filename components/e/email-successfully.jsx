import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/l/ljl6vmb9x.css';
import '../../css/i/i86tx-bpz.css';
import '../../css/x/xm56qfbnf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="ljl6vmb9x"/><path class="i86tx-bpz"/><path class="xm56qfbnf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:email-successfully"} {...others} />);
}

export default Component;
