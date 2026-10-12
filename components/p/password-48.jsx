import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p0tjbtb1u.css';
import '../../css/k/k3m_0ge5m.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="p0tjbtb1u"/><path class="k3m_0ge5m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:password-48"} {...others} />);
}

export default Component;
