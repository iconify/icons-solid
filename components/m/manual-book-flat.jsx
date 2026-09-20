import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c61vgob9k.css';
import '../../css/v/v74lhdbnm.css';
import '../../css/o/o9w8dobrg.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c61vgob9k"/><path clip-rule="evenodd" class="v74lhdbnm"/><path clip-rule="evenodd" class="o9w8dobrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:manual-book-flat"} {...others} />);
}

export default Component;
