import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/q/qovcvsn9r.css';
import '../../css/d/ds73arb-k.css';
import '../../css/d/dkgqydb5f.css';
import '../../css/b/bnm-08rej.css';
import '../../css/w/wc57jipda.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="qovcvsn9r"/><path class="ds73arb-k"/><path class="dkgqydb5f"/><path class="bnm-08rej"/><path class="wc57jipda"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:cattle-zodiac"} {...others} />);
}

export default Component;
