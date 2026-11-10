import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1to1ac8k.css';
import '../../css/n/nvsv-84yu.css';
import '../../css/k/khluz147i.css';
import '../../css/s/s0cesnbdd.css';
import '../../css/t/tdvegccui.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x1to1ac8k"/><path class="nvsv-84yu"/><path class="khluz147i"/><circle class="s0cesnbdd"/><path class="tdvegccui"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-clock"} {...others} />);
}

export default Component;
