import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ev3htzt4x.css';
import '../../css/n/n-_redqnx.css';
import '../../css/n/n_r4n_bvp.css';
import '../../css/j/jyumk6b3q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="ev3htzt4x"/><path class="n-_redqnx"/><path class="n_r4n_bvp"/><path class="jyumk6b3q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:chart-2-line-duotone"} {...others} />);
}

export default Component;
