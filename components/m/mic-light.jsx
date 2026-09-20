import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/s/sb6pk9_pi.css';
import '../../css/q/q1dfbdcks.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><rect class="sb6pk9_pi"/><path class="q1dfbdcks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:mic-light"} {...others} />);
}

export default Component;
