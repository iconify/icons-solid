import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/u/u0qa14b2r.css';
import '../../css/l/l15eg4b1k.css';
import '../../css/k/kfczp1v0y.css';
import '../../css/t/twlqflbgi.css';
import '../../css/p/pa-aaynvi.css';
import '../../css/n/npjeylbea.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="u0qa14b2r"/><path class="l15eg4b1k wm-shine"/><path class="kfczp1v0y wm-k"/><path class="twlqflbgi wm-a"/><path class="pa-aaynvi wm-s"/><path class="npjeylbea wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:satellite"} {...others} />);
}

export default Component;
