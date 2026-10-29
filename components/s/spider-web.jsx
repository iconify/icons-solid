import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/in2j8iy9x.css';
import '../../css/a/apd15e1-n.css';
import '../../css/g/glpi5abzu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="in2j8iy9x"/><path class="apd15e1-n"/><path class="glpi5abzu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:spider-web"} {...others} />);
}

export default Component;
