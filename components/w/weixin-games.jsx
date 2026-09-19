import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/c/c91ecjb_r.css';
import '../../css/a/a6rik3s7b.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="c91ecjb_r"/><path class="a6rik3s7b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:weixin-games"} {...others} />);
}

export default Component;
