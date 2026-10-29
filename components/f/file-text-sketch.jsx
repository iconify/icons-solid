import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/arsn4elex.css';
import '../../css/m/mbsaw5b_s.css';
import '../../css/a/ax6669bao.css';
import '../../css/l/lnhrmpy0b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="arsn4elex"/><path class="mbsaw5b_s wm-a"/><path class="ax6669bao wm-k"/><path class="lnhrmpy0b wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-text-sketch"} {...others} />);
}

export default Component;
