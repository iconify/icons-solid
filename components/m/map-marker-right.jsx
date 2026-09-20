import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lbu1lpb0v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lbu1lpb0v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:map-marker-right"} {...others} />);
}

export default Component;
