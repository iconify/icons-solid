import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xdf1uzbvv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xdf1uzbvv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair:map-pin"} {...others} />);
}

export default Component;
