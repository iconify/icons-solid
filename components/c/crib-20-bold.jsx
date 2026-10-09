import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wzdvkjb-z.css';
import '../../css/k/ke2lxtdne.css';
import '../../css/m/m_laitx2a.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="wzdvkjb-z"/><path class="ke2lxtdne"/><path class="m_laitx2a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:crib-20-bold"} {...others} />);
}

export default Component;
