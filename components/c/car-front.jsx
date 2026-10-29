import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/y/yz457tbdl.css';
import '../../css/y/y8lg13ekt.css';
import '../../css/g/gqtgxvbun.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="yz457tbdl"/><path class="y8lg13ekt"/><path class="gqtgxvbun"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:car-front"} {...others} />);
}

export default Component;
