import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tdx7w5brs.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/d/d_taw6y8e.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="tdx7w5brs"/><circle class="mpf1g8bav"/><path class="d_taw6y8e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:bluetooth-circle"} {...others} />);
}

export default Component;
