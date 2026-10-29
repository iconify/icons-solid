import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/egwfombsu.css';
import '../../css/h/hbl9yebar.css';
import '../../css/d/duo2k8-5d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="egwfombsu"/><path class="hbl9yebar"/><path class="duo2k8-5d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:wink"} {...others} />);
}

export default Component;
