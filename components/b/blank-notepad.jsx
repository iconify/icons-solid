import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kk2pmvbyt.css';
import '../../css/p/p2_kz_dot.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="kk2pmvbyt"/><path class="p2_kz_dot"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:blank-notepad"} {...others} />);
}

export default Component;
