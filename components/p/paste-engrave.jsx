import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eziu-6b2h.css';
import '../../css/o/otle9ccjv.css';
import '../../css/i/i-v124nln.css';
import '../../css/z/z3fy_envj.css';
import '../../css/w/wp31-1bdq.css';
import '../../css/t/ty9mbdqxq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="eziu-6b2h wm-k"/><path class="otle9ccjv wm-a"/><path class="i-v124nln wm-shadow"/><path class="wm-k z3fy_envj"/><path class="wm-a wp31-1bdq"/><path class="ty9mbdqxq wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:paste-engrave"} {...others} />);
}

export default Component;
