import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zkbw7lrcj.css';
import '../../css/w/w8xd_eojn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="zkbw7lrcj"/><path class="w8xd_eojn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:shopping-basket-2"} {...others} />);
}

export default Component;
