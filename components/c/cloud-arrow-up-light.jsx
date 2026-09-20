import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv3t_9dyo.css';
import '../../css/h/h-fa8m_xj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iv3t_9dyo"/><path class="h-fa8m_xj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:cloud-arrow-up-light"} {...others} />);
}

export default Component;
