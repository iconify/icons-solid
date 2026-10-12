import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/maylk8rfl.css';
import '../../css/b/b9sgtzb2r.css';
import '../../css/k/knx8xhbeu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="maylk8rfl"/><path class="b9sgtzb2r"/><path class="knx8xhbeu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:paint"} {...others} />);
}

export default Component;
