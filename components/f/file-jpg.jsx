import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kh3_x0b2y.css';
import '../../css/n/n2f10gz8u.css';
import '../../css/x/x4hi92dzj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="kh3_x0b2y"/><path class="n2f10gz8u"/><path class="x4hi92dzj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-jpg"} {...others} />);
}

export default Component;
