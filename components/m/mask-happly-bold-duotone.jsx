import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s0xxt-34c.css';
import '../../css/f/f2cq9cczx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="s0xxt-34c"/><path class="f2cq9cczx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:mask-happly-bold-duotone"} {...others} />);
}

export default Component;
