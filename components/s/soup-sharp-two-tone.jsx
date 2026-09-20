import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gp_8x1bzb.css';
import '../../css/t/th7qmabfh.css';
import '../../css/v/vaa1bn60q.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="gp_8x1bzb"><path class="th7qmabfh"/><path class="vaa1bn60q"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:soup-sharp-two-tone"} {...others} />);
}

export default Component;
