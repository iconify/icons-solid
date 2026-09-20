import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oolfl0bjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oolfl0bjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:map-arrow-down-bold"} {...others} />);
}

export default Component;
