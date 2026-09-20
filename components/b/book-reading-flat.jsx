import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3j0-6nse.css';
import '../../css/p/prunv4kmb.css';
import '../../css/z/zflji6bre.css';
import '../../css/u/u1685-b6b.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="p3j0-6nse"/><path class="prunv4kmb"/><path class="zflji6bre"/><path clip-rule="evenodd" class="u1685-b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:book-reading-flat"} {...others} />);
}

export default Component;
