import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_xu-1bpm.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="m_xu-1bpm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"radix-icons:double-arrow-up"} {...others} />);
}

export default Component;
