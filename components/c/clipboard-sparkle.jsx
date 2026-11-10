import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/izxt2wbud.css';
import '../../css/w/wvvtfqbgs.css';
import '../../css/n/nfryhn5zj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="izxt2wbud"/><path class="wvvtfqbgs"/><path class="nfryhn5zj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:clipboard-sparkle"} {...others} />);
}

export default Component;
