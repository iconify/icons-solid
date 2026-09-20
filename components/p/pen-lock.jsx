import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l_ad-m_cr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l_ad-m_cr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:pen-lock"} {...others} />);
}

export default Component;
