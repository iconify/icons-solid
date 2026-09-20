import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/skivpjgzw.css';
import '../../css/x/xxyxn2bje.css';
import '../../css/o/o4_h92bsc.css';
import '../../css/v/vu6iotgic.css';
import '../../css/c/cxyhn7d-z.css';
import '../../css/w/w862wxfig.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="skivpjgzw"/><path class="xxyxn2bje"/><path clip-rule="evenodd" class="o4_h92bsc"/><path class="vu6iotgic"/><path class="cxyhn7d-z"/><path class="w862wxfig"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:user-identifier-card"} {...others} />);
}

export default Component;
