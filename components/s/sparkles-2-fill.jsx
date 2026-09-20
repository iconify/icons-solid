import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_o0i4b8n.css';
import '../../css/p/p9afdab0u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_o0i4b8n"/><path clip-rule="evenodd" class="p9afdab0u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:sparkles-2-fill"} {...others} />);
}

export default Component;
