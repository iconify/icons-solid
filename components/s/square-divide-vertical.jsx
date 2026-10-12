import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zraeqovwy.css';
import '../../css/q/qfd3aux-i.css';
import '../../css/t/tp10qepid.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><rect transform="matrix(-1 0 0 1 20.72 3.13)" class="zraeqovwy"/><rect transform="matrix(-1 0 0 1 20.72 3.13)" class="qfd3aux-i"/><path class="tp10qepid"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:square-divide-vertical"} {...others} />);
}

export default Component;
