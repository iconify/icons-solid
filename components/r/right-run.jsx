import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/x/xl9wbnx-v.css';
import '../../css/b/bm9t00_7o.css';
import '../../css/o/oi3yrsxuo.css';
import '../../css/p/pk-2b9b3u.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><rect class="xl9wbnx-v"/><rect class="bm9t00_7o"/><path class="oi3yrsxuo"/><path class="pk-2b9b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:right-run"} {...others} />);
}

export default Component;
