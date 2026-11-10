import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pryzs7ham.css';
import '../../css/b/bx6r8nbqq.css';
import '../../css/j/jy42i8bgg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pryzs7ham"/><path class="bx6r8nbqq"/><path class="jy42i8bgg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:padding"} {...others} />);
}

export default Component;
