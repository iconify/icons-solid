import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/v/v_j2mibwy.css';
import '../../css/d/dluw68kau.css';
import '../../css/i/iouugbb0f.css';
import '../../css/m/m7jmjqb8r.css';
import '../../css/q/q_2uggb0w.css';
import '../../css/m/mvgm2mp3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="v_j2mibwy"/><path class="dluw68kau"/><path class="iouugbb0f"/><path class="m7jmjqb8r"/><path class="q_2uggb0w"/><path class="mvgm2mp3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:color-swatches"} {...others} />);
}

export default Component;
