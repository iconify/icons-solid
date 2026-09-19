import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yv4-3120a.css';
import '../../css/q/qou2q9m2p.css';
import '../../css/j/j2u06tb_o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="yv4-3120a"/><path class="qou2q9m2p"/><path clip-rule="evenodd" class="j2u06tb_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:helpcenter"} {...others} />);
}

export default Component;
