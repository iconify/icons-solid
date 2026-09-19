import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/x/xqydo_e_x.css';
import '../../css/z/zjj1q_b2i.css';
import '../../css/z/zcesgib0l.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="xqydo_e_x"/><path class="zjj1q_b2i"/><path class="zcesgib0l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:vertical-spacing-between-items"} {...others} />);
}

export default Component;
