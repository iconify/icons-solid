import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j18kxf9it.css';
import '../../css/i/imgffbcny.css';
import '../../css/h/hq1suubiu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="j18kxf9it"/><rect class="imgffbcny"/><path class="hq1suubiu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cigarette"} {...others} />);
}

export default Component;
