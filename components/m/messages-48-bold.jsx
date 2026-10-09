import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wan7vd7uu.css';
import '../../css/m/m_3bu7b7s.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="wan7vd7uu"/><path class="m_3bu7b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:messages-48-bold"} {...others} />);
}

export default Component;
