import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xck5rbc3z.css';
import '../../css/u/u08vk-bgg.css';
import '../../css/b/b_dsvybgn.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="xck5rbc3z"><path class="u08vk-bgg"/><path class="b_dsvybgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:download-box-2"} {...others} />);
}

export default Component;
