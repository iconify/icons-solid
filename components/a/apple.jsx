import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/q/qpcdyh3mb.css';
import '../../css/n/nkpf7efpj.css';
import '../../css/p/pti_5hrpj.css';
import '../../css/y/yt-dqm53i.css';
import '../../css/t/to2gc3o4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="qpcdyh3mb wm-shadow"/><path class="nkpf7efpj"/><path class="pti_5hrpj"/><path class="yt-dqm53i"/><path class="to2gc3o4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:apple"} {...others} />);
}

export default Component;
