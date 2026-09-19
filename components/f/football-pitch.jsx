import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/s46wx2bmy.css';
import '../../css/h/h_tsn8bxt.css';
import '../../css/h/h_f5w3-ut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ddvgu8bvv"><path class="s46wx2bmy"/><circle class="h_tsn8bxt"/><path class="h_f5w3-ut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:football-pitch"} {...others} />);
}

export default Component;
