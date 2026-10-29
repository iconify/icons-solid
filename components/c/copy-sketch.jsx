import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/z/zp2593bpl.css';
import '../../css/v/v-n2grb0r.css';
import '../../css/x/xa8yffp9t.css';
import '../../css/j/jchcoxbow.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="zp2593bpl"/><path class="v-n2grb0r wm-a"/><path class="wm-k xa8yffp9t"/><path class="jchcoxbow wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:copy-sketch"} {...others} />);
}

export default Component;
