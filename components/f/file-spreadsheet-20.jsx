import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kimfu9q5t.css';
import '../../css/p/p_z32__tj.css';
import '../../css/a/an10mdq2o.css';
import '../../css/v/vl729ybrf.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kimfu9q5t"/><path class="p_z32__tj"/><path class="an10mdq2o"/><path class="vl729ybrf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-spreadsheet-20"} {...others} />);
}

export default Component;
