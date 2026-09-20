import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j33yqjb_r.css';
import '../../css/j/j4w39z04o.css';
import '../../css/u/uby7wgr4w.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="j33yqjb_r"/><path class="j4w39z04o"/><path class="uby7wgr4w"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:zoom-replace"} {...others} />);
}

export default Component;
