import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jtc1ffbfw.css';
import '../../css/x/x29b08dnm.css';
import '../../css/o/oxtxyyb8j.css';
import '../../css/j/jd5jsnb3i.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="jtc1ffbfw"/><path class="x29b08dnm"/><path class="oxtxyyb8j"/><path class="jd5jsnb3i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gcp:identity-platform"} {...others} />);
}

export default Component;
