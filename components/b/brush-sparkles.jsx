import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkse8qeon.css';
import '../../css/r/rf1to2b4w.css';
import '../../css/l/lnwew2bga.css';
import '../../css/s/s8libablg.css';
import '../../css/k/kc0fhhoxt.css';
import '../../css/j/ja8muydus.css';
import '../../css/r/rnl3jxk7z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="tkse8qeon"/><path class="rf1to2b4w"/><path class="lnwew2bga"/><path class="s8libablg"/><path class="kc0fhhoxt"/><path class="ja8muydus"/><path class="rnl3jxk7z"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:brush-sparkles"} {...others} />);
}

export default Component;
