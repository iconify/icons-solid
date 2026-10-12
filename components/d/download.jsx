import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hvnkvubqr.css';
import '../../css/f/f_zd26b3k.css';
import '../../css/c/c01djtbgr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="hvnkvubqr"/><path class="f_zd26b3k"/><path class="c01djtbgr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:download"} {...others} />);
}

export default Component;
