import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ocpi9mk0u.css';
import '../../css/v/v031subhd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ocpi9mk0u"/><path class="v031subhd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:desktop-monitor"} {...others} />);
}

export default Component;
