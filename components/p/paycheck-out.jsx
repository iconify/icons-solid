import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ea6vscbfj.css';
import '../../css/z/zd8_ny7zw.css';
import '../../css/z/zpov_y2yu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ea6vscbfj"/><path class="zd8_ny7zw"/><path class="zpov_y2yu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paycheck-out"} {...others} />);
}

export default Component;
