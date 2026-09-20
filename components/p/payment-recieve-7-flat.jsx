import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iy0tlqb6a.css';
import '../../css/a/a0b_g_bgu.css';
import '../../css/o/o5qaj0b6o.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="iy0tlqb6a"/><path clip-rule="evenodd" class="a0b_g_bgu"/><path class="o5qaj0b6o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:payment-recieve-7-flat"} {...others} />);
}

export default Component;
