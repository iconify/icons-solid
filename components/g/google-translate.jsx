import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p4ppg0-7m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p4ppg0-7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:google-translate"} {...others} />);
}

export default Component;
