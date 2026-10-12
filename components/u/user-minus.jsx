import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/f/f3ejc33el.css';
import '../../css/k/kpk0l3byf.css';
import '../../css/k/khzigl4sm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="f3ejc33el"/><path class="kpk0l3byf"/><path class="khzigl4sm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-minus"} {...others} />);
}

export default Component;
