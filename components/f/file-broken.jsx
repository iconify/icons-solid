import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zqckxhbcc.css';
import '../../css/t/t8sd5gbim.css';
import '../../css/t/twgphccua.css';
import '../../css/l/lony_3cne.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="zqckxhbcc"/><path class="t8sd5gbim"/><path class="twgphccua"/><path class="lony_3cne"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:file-broken"} {...others} />);
}

export default Component;
