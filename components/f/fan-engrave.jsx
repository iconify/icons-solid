import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q11d6fe3q.css';
import '../../css/n/n9lwa3bqz.css';
import '../../css/u/uxm70-bnm.css';
import '../../css/b/bpo7kkb-y.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="q11d6fe3q wm-k"/><path class="n9lwa3bqz wm-shadow"/><path class="uxm70-bnm wm-k"/><path class="bpo7kkb-y wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:fan-engrave"} {...others} />);
}

export default Component;
