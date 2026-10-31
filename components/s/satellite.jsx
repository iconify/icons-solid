import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/u1_d9r8nn.css';
import '../../css/v/v81eowbwf.css';
import '../../css/l/lace1ubqa.css';
import '../../css/u/u5wkdr5_z.css';
import '../../css/h/hyqtf6sjl.css';
import '../../css/d/daprfzoid.css';
import '../../css/u/ubwvabclg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="u1_d9r8nn wm-shadow"/><path class="v81eowbwf"/><path class="lace1ubqa"/><path class="u5wkdr5_z"/><path class="hyqtf6sjl"/><path class="daprfzoid"/><path class="ubwvabclg wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:satellite"} {...others} />);
}

export default Component;
