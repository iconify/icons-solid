import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/c/c8m_36b0p.css';
import '../../css/m/mkh2lzbau.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="c8m_36b0p"/><path class="mkh2lzbau"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:end-call-rounded-line-duotone"} {...others} />);
}

export default Component;
