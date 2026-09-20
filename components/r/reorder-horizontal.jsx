import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gdu0l2a4x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gdu0l2a4x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:reorder-horizontal"} {...others} />);
}

export default Component;
