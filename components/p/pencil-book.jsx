import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f482_7-uv.css';
import '../../css/c/chc73uqmn.css';
import '../../css/v/v6wp-ccoe.css';
import '../../css/y/yx0z17bnh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="f482_7-uv"/><rect transform="matrix(0 -1 -1 0 5.47 7.54)" class="chc73uqmn"/><path class="v6wp-ccoe"/><path class="yx0z17bnh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:pencil-book"} {...others} />);
}

export default Component;
