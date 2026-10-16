import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mqco-_b5t.css';
import '../../css/f/f4xd5tbaj.css';
import '../../css/r/rcm68kbxb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="mqco-_b5t"/><path class="f4xd5tbaj"/><path class="rcm68kbxb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:strawberry"} {...others} />);
}

export default Component;
