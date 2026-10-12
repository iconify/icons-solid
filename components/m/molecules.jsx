import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/akz5_vbwu.css';
import '../../css/j/jf75smb4m.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="akz5_vbwu"/><path class="jf75smb4m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:molecules"} {...others} />);
}

export default Component;
