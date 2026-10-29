import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/y1yexiblt.css';
import '../../css/j/je_ougb0a.css';
import '../../css/z/ze1x51aor.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="y1yexiblt"/><path class="je_ougb0a"/><path class="ze1x51aor"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:cctv"} {...others} />);
}

export default Component;
