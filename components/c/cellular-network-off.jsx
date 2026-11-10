import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vf8asjb5u.css';
import '../../css/x/xxw0qmgoi.css';
import '../../css/o/o62t2acxr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vf8asjb5u"/><circle class="xxw0qmgoi"/><path class="o62t2acxr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:cellular-network-off"} {...others} />);
}

export default Component;
