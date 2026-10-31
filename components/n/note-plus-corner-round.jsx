import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m_q0kmbwh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="m_q0kmbwh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:note-plus-corner-round"} {...others} />);
}

export default Component;
