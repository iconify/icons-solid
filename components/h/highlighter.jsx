import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gnk727bol.css';
import '../../css/a/adb-d-jid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="gnk727bol"/><path class="adb-d-jid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:highlighter"} {...others} />);
}

export default Component;
