import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we2agujqc.css';
import '../../css/d/dy9z_lboh.css';
import '../../css/p/pg9b_zw-q.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="we2agujqc"/><path class="dy9z_lboh"/><path class="pg9b_zw-q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:socket-20-bold"} {...others} />);
}

export default Component;
