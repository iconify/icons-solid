import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i-s8nfk6u.css';
import '../../css/f/fpuyb9bst.css';
import '../../css/l/lpjwmjbdt.css';
import '../../css/e/ec3q2exum.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i-s8nfk6u"/><rect transform="rotate(90 0 21.58)scale(-1 1)" class="fpuyb9bst"/><circle transform="rotate(90 12 12)" class="lpjwmjbdt"/><path class="ec3q2exum"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:socket-square"} {...others} />);
}

export default Component;
