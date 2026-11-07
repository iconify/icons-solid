import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/murvr1lpr.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="murvr1lpr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:pipette-broken"} {...others} />);
}

export default Component;
