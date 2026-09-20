import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vib04l-vj.css';
import '../../css/i/i0vrgebuc.css';
import '../../css/e/e7ble4bav.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="vib04l-vj"/><path class="i0vrgebuc"/><path class="e7ble4bav"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:img-out-box-fill"} {...others} />);
}

export default Component;
