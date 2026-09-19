import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_g-xfiat.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="m_g-xfiat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:chart-simple"} {...others} />);
}

export default Component;
