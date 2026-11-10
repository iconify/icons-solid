import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q73d8pb9b.css';
import '../../css/k/k-euat6ge.css';
import '../../css/r/r34fzgoxu.css';
import '../../css/u/ukspl3bmt.css';
import '../../css/l/l_43hltyf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="q73d8pb9b"/><path class="k-euat6ge"/><path class="r34fzgoxu"/><path class="ukspl3bmt"/><path class="l_43hltyf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-reference"} {...others} />);
}

export default Component;
