import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/htel1pppx.css';
import '../../css/b/b1vm5lb8u.css';
import '../../css/q/q3_r_qbcj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="htel1pppx"/><path class="b1vm5lb8u"/><path class="q3_r_qbcj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:experiment-x"} {...others} />);
}

export default Component;
