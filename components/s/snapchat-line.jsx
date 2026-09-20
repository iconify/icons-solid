import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ptu9m_w_c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ptu9m_w_c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:snapchat-line"} {...others} />);
}

export default Component;
