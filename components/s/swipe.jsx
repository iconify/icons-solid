import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/ofs9e3bxd.css';
import '../../css/l/lle7qubvx.css';
import '../../css/w/wfxpsyxhd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ofs9e3bxd"/><path class="lle7qubvx"/><path class="wfxpsyxhd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:swipe"} {...others} />);
}

export default Component;
