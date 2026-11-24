import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sqpt0ub4e.css';
import '../../css/h/hpyrhjbtm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sqpt0ub4e"/><path class="hpyrhjbtm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide-extended:layer-arrow-down-filled"} {...others} />);
}

export default Component;
