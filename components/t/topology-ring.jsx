import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/huqn5m_ey.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="huqn5m_ey"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:topology-ring"} {...others} />);
}

export default Component;
