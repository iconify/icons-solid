import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vme83ob7i.css';
import '../../css/u/uk5fpvbxm.css';
import '../../css/i/izn5n0btt.css';
import '../../css/x/xo_jjmbgq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="vme83ob7i"/><path class="uk5fpvbxm"/><path class="izn5n0btt"/><path class="xo_jjmbgq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:traffic-light-pop"} {...others} />);
}

export default Component;
