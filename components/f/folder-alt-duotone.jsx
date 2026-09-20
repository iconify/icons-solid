import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kfjxj683d.css';
import '../../css/z/zqs39fbjf.css';
import '../../css/o/okxvgrb-h.css';
import '../../css/g/gme1-c65h.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kfjxj683d"/><path class="zqs39fbjf"/><path class="okxvgrb-h"/><path class="gme1-c65h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:folder-alt-duotone"} {...others} />);
}

export default Component;
