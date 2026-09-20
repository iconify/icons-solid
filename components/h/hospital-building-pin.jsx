import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/s/smejqvbtu.css';
import '../../css/n/n03m_-m0p.css';
import '../../css/l/llhkxtbuv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="smejqvbtu"/><path class="n03m_-m0p"/><path class="llhkxtbuv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:hospital-building-pin"} {...others} />);
}

export default Component;
