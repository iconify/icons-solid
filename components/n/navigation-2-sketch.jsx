import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/h7w4nh9fc.css';
import '../../css/k/k-y7wkbqg.css';
import '../../css/z/z7kma4b3s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="h7w4nh9fc"/><path class="k-y7wkbqg"/><path class="z7kma4b3s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:navigation-2-sketch"} {...others} />);
}

export default Component;
