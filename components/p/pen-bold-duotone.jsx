import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lq9kkcbbd.css';
import '../../css/d/d56vnzbxk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lq9kkcbbd"/><path class="d56vnzbxk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pen-bold-duotone"} {...others} />);
}

export default Component;
