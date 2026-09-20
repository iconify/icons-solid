import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/znvfvtbpr.css';
import '../../css/e/en74lnbon.css';
import '../../css/u/uwky93byz.css';
import '../../css/b/btol5jbuq.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="znvfvtbpr"/><path class="en74lnbon"/><path class="uwky93byz"/><path class="btol5jbuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:airport-security"} {...others} />);
}

export default Component;
