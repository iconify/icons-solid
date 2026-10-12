import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f_uwrv1sh.css';
import '../../css/y/ytnnfb2fz.css';
import '../../css/v/vgkwz8q2y.css';
import '../../css/f/fpuyb9bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="f_uwrv1sh"/><path class="ytnnfb2fz"/><path class="vgkwz8q2y"/><rect transform="matrix(0 -1 -1 0 21.58 21.77)" class="fpuyb9bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:user-background"} {...others} />);
}

export default Component;
