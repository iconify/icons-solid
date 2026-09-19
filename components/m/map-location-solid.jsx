import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l7dtnxsic.css';
import '../../css/s/sega__bro.css';
import '../../css/v/vmfvg5bti.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l7dtnxsic"/><path clip-rule="evenodd" class="sega__bro"/><path class="vmfvg5bti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"basil:map-location-solid"} {...others} />);
}

export default Component;
