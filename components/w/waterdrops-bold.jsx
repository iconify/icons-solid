import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nq3ocyl1l.css';
import '../../css/m/m_u_5ybba.css';
import '../../css/s/s-vk0qbpw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nq3ocyl1l"/><path class="m_u_5ybba"/><path class="s-vk0qbpw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:waterdrops-bold"} {...others} />);
}

export default Component;
