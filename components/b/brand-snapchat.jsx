import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_yc0s4am.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_yc0s4am"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:brand-snapchat"} {...others} />);
}

export default Component;
