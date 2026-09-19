import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_cx-qbkx.css';

const viewBox = {"width":24,"height":25};
const content = `<path clip-rule="evenodd" class="m_cx-qbkx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cuida:swap-horizontal-arrows-outline"} {...others} />);
}

export default Component;
