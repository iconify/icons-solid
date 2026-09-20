import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_b_9cx1c.css';
import '../../css/i/iejop6bth.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_b_9cx1c"/><path class="iejop6bth"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:alibabacloud"} {...others} />);
}

export default Component;
