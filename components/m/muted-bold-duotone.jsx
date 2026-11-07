import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nszf3hbuo.css';
import '../../css/m/m_773h0_l.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="nszf3hbuo"/><path class="m_773h0_l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:muted-bold-duotone"} {...others} />);
}

export default Component;
