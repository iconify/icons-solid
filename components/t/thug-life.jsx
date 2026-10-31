import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cs7rlcbua.css';
import '../../css/c/czgk2wbar.css';
import '../../css/a/adsih9_uj.css';
import '../../css/q/qog11zbsn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(45 14.039 35.97)" class="cs7rlcbua"/><path class="czgk2wbar"/><path class="adsih9_uj"/><path clip-rule="evenodd" class="qog11zbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-memes:thug-life"} {...others} />);
}

export default Component;
