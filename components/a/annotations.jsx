import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/aogt7nbob.css';
import '../../css/k/kuk9u9zug.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="aogt7nbob"/><path class="kuk9u9zug"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:annotations"} {...others} />);
}

export default Component;
