import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x4zmh5bfn.css';
import '../../css/k/krydz_bms.css';
import '../../css/m/msqmn_bst.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="x4zmh5bfn"/><path class="krydz_bms"/><path class="msqmn_bst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:window-1"} {...others} />);
}

export default Component;
