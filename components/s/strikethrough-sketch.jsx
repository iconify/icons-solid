import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/za-y1svgo.css';
import '../../css/k/khw2__bqg.css';
import '../../css/l/lo43kub9k.css';
import '../../css/b/bstijcuuk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="wm-k za-y1svgo"/><path class="khw2__bqg wm-a"/><path class="lo43kub9k wm-k"/><path class="bstijcuuk wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:strikethrough-sketch"} {...others} />);
}

export default Component;
