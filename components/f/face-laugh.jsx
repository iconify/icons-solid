import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vvkkqed9o.css';
import '../../css/o/op9e02b7c.css';
import '../../css/y/ybmfr0bei.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vvkkqed9o"/><path class="op9e02b7c"/><path class="ybmfr0bei"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:face-laugh"} {...others} />);
}

export default Component;
