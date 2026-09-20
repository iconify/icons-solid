import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i-bp5m_2j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i-bp5m_2j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ri:login-circle-fill"} {...others} />);
}

export default Component;
