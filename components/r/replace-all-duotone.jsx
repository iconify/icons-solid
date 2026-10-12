import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w704txbyo.css';
import '../../css/k/kh5f1ub7k.css';
import '../../css/x/x00sututu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="w704txbyo"/><path class="kh5f1ub7k"/><path class="x00sututu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:replace-all-duotone"} {...others} />);
}

export default Component;
