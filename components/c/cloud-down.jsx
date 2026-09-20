import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_g8aobdf.css';

const viewBox = {"width":30,"height":30};
const content = `<path class="m_g8aobdf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"wi:cloud-down"} {...others} />);
}

export default Component;
