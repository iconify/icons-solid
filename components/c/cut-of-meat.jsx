import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cmj02gb7z.css';
import '../../css/r/rp2vcfmfm.css';
import '../../css/w/wrl2pr1ap.css';
import '../../css/c/cj5o2dslp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="ft5dv1b6b"><path class="cmj02gb7z"/><path clip-rule="evenodd" class="rp2vcfmfm"/><path class="wrl2pr1ap"/><path class="cj5o2dslp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent-emoji-flat:cut-of-meat"} {...others} />);
}

export default Component;
