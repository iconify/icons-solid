import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cn0g7j1-i.css';
import '../../css/n/nkf5_lt8x.css';
import '../../css/u/uj2alqbrr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="cn0g7j1-i"/><circle transform="rotate(90 12 12)" class="nkf5_lt8x"/><path class="uj2alqbrr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:eclipse"} {...others} />);
}

export default Component;
