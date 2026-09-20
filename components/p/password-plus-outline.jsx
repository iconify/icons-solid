import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i84m_g4-k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i84m_g4-k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:password-plus-outline"} {...others} />);
}

export default Component;
