import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hs5m_2bht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hs5m_2bht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:menu-alt-1-bulk-round"} {...others} />);
}

export default Component;
