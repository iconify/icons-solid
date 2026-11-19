import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/el-mz0bwb.css';
import '../../css/c/c-g19nkiu.css';
import '../../css/l/lu8-i8bqf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="el-mz0bwb"/><path class="c-g19nkiu"/><path class="lu8-i8bqf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:annotations"} {...others} />);
}

export default Component;
