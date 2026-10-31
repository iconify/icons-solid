import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4yt4hbdq.css';
import '../../css/b/bjtcg19-l.css';
import '../../css/p/pzeoninal.css';
import '../../css/g/gjhu32vuk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="f4yt4hbdq"/><path class="bjtcg19-l"/><path class="pzeoninal"/><path class="gjhu32vuk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:hook-pop"} {...others} />);
}

export default Component;
