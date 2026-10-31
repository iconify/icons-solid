import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/r9px29bcq.css';
import '../../css/l/lou_evkxu.css';
import '../../css/u/ucnad0gku.css';
import '../../css/m/mkl7_9b_o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="r9px29bcq wm-shadow"/><path class="lou_evkxu wm-shadow"/><path class="ucnad0gku"/><path class="mkl7_9b_o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:file-output"} {...others} />);
}

export default Component;
