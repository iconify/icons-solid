import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/k/kli-63hdb.css';
import '../../css/i/ija0yfmyy.css';
import '../../css/w/wohmv9l7b.css';
import '../../css/l/llpy3-msl.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="kli-63hdb"/><path class="ija0yfmyy"/><path class="wohmv9l7b"/><path class="llpy3-msl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:weixin-shake"} {...others} />);
}

export default Component;
