import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oiy2qljci.css';
import '../../css/w/wosekoz_u.css';
import '../../css/n/nge5cfbll.css';
import '../../css/k/krslsibqq.css';
import '../../css/i/iaq5wub9u.css';
import '../../css/p/pce7ldb7f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="s9nmekbvz"><path class="oiy2qljci wm-deco"/><path class="wm-deco wosekoz_u"/><path class="nge5cfbll wm-deco"/><path class="krslsibqq wm-k"/><path class="iaq5wub9u wm-a"/><path class="pce7ldb7f wm-k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:heart-crack-blueprint"} {...others} />);
}

export default Component;
