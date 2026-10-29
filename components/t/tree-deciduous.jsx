import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bk16jc0um.css';
import '../../css/u/ue-ttoc_q.css';
import '../../css/z/zkxmfkhvu.css';
import '../../css/p/pb1qkvd7p.css';
import '../../css/f/f5roxxihb.css';
import '../../css/p/pnpgmybye.css';
import '../../css/i/io2tgddoq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="bk16jc0um wm-k"/><path class="ue-ttoc_q wm-k"/><path class="wm-k zkxmfkhvu"/><path class="pb1qkvd7p wm-shine"/><path class="f5roxxihb wm-a"/><path class="pnpgmybye wm-a"/><path class="io2tgddoq wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-anime:tree-deciduous"} {...others} />);
}

export default Component;
