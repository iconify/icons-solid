import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/expxopj_x.css';
import '../../css/p/pf8dc_bap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="expxopj_x"/><path class="pf8dc_bap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:islam-filled"} {...others} />);
}

export default Component;
