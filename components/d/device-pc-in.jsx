import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qwkut7v4p.css';
import '../../css/r/rcdfnub0v.css';
import '../../css/a/a29epk8dq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect class="qwkut7v4p"/><rect class="rcdfnub0v"/><path class="a29epk8dq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:device-pc-in"} {...others} />);
}

export default Component;
