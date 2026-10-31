import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jezntzhya.css';
import '../../css/p/p-pmhcbxo.css';
import '../../css/t/t6bfzabmi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="jezntzhya wm-k"/><path class="p-pmhcbxo wm-shine"/><path class="t6bfzabmi wm-shine"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-lunar:mail-open"} {...others} />);
}

export default Component;
