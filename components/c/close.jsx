import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n344-4bza.css';
import '../../css/m/m8u4yrbpc.css';
import '../../css/j/jruw4cb7t.css';
import '../../css/g/g1-_isbsl.css';
import '../../css/q/qa0vh8bgs.css';
import '../../css/x/xla5q3byz.css';
import '../../css/n/natw9zrwt.css';
import '../../css/c/cf75veb7f.css';
import '../../css/g/ggry4qb2i.css';
import '../../css/z/zr-9hv6ts.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="n344-4bza wm-shadow"/><path class="m8u4yrbpc wm-k"/><path class="jruw4cb7t wm-k"/><path class="g1-_isbsl wm-k"/><path class="qa0vh8bgs wm-k"/><path class="wm-shine xla5q3byz"/><path class="natw9zrwt wm-k"/><path class="cf75veb7f wm-k"/><path class="ggry4qb2i wm-k"/><path class="wm-shine zr-9hv6ts"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-coquette:close"} {...others} />);
}

export default Component;
