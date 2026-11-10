import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wwiit7b3q.css';
import '../../css/a/axl2q9bvf.css';
import '../../css/a/a4dyx2bci.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wwiit7b3q"/><path class="axl2q9bvf"/><path class="a4dyx2bci"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:helmet-off"} {...others} />);
}

export default Component;
