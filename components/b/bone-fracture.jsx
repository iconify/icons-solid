import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jj8-3m_yb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jj8-3m_yb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:bone-fracture"} {...others} />);
}

export default Component;
