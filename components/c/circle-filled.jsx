import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ym_-4-bcl.css';
import '../../css/t/t5ljtyb4y.css';

const viewBox = {"width":24,"height":24};
const content = `<g transform="rotate(90 12 12)" class="ft5dv1b6b"><circle class="ym_-4-bcl"/><circle class="t5ljtyb4y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:circle-filled"} {...others} />);
}

export default Component;
