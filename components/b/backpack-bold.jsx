import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x_f_qcc_q.css';
import '../../css/l/lp0dbjbtt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x_f_qcc_q"/><path class="lp0dbjbtt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:backpack-bold"} {...others} />);
}

export default Component;
