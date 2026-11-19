import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e84ltdytn.css';
import '../../css/e/eawhonbnj.css';
import '../../css/x/x-f0osvuj.css';
import '../../css/g/ga-n9actm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="e84ltdytn"/><circle class="eawhonbnj"/><path class="x-f0osvuj"/><path class="ga-n9actm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:refresh-dot"} {...others} />);
}

export default Component;
