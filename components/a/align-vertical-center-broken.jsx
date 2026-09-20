import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/dzle42rhc.css';
import '../../css/b/bb69tdbtk.css';
import '../../css/k/kah-p9bbs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="dzle42rhc"/><path class="bb69tdbtk"/><path class="kah-p9bbs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:align-vertical-center-broken"} {...others} />);
}

export default Component;
