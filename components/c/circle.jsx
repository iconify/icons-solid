import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c5owlbcir.css';
import '../../css/n/nkf5_lt8x.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="rotate(90 12 12)" class="ft5dv1b6b"><circle class="c5owlbcir"/><circle class="nkf5_lt8x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:circle"} {...others} />);
}

export default Component;
