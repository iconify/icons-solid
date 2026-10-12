import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qm8zf8bpm.css';
import '../../css/k/k-euat6ge.css';
import '../../css/r/r34fzgoxu.css';
import '../../css/k/kbvm9mbqu.css';
import '../../css/u/u-7roon_z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qm8zf8bpm"/><path class="k-euat6ge"/><path class="r34fzgoxu"/><path class="kbvm9mbqu"/><path class="u-7roon_z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-reference"} {...others} />);
}

export default Component;
