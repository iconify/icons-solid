import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c3jzujlrk.css';
import '../../css/e/evm8hfb2r.css';
import '../../css/v/vy6lcccai.css';
import '../../css/h/h6o5jc4pv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="c3jzujlrk"/><path class="evm8hfb2r"/><path class="vy6lcccai"/><path class="h6o5jc4pv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user"} {...others} />);
}

export default Component;
