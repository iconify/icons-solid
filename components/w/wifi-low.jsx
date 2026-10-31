import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/p/p7j418b9p.css';
import '../../css/p/plpl1_b2t.css';
import '../../css/d/d-ca87bew.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="p7j418b9p wm-shadow"/><path class="plpl1_b2t"/><path class="d-ca87bew"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:wifi-low"} {...others} />);
}

export default Component;
