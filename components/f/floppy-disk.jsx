import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/b/bxbplccbh.css';
import '../../css/k/k8-eggb6n.css';
import '../../css/g/gwk_cz4-x.css';
import '../../css/h/hm5ka9bpk.css';
import '../../css/i/idu-ruaqq.css';
import '../../css/k/kga0wt3jc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="bxbplccbh"/><path class="k8-eggb6n"/><path class="gwk_cz4-x"/><path class="hm5ka9bpk"/><path class="idu-ruaqq"/><path class="kga0wt3jc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:floppy-disk"} {...others} />);
}

export default Component;
