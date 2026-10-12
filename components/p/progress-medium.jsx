import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dqeivn5-a.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/f/fkb_h_byx.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="dqeivn5-a"/><circle class="mpf1g8bav"/><path clip-rule="evenodd" class="fkb_h_byx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:progress-medium"} {...others} />);
}

export default Component;
