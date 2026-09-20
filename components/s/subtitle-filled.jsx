import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lqzom5m_d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lqzom5m_d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:subtitle-filled"} {...others} />);
}

export default Component;
