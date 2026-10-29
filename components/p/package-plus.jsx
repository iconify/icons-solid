import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/n/n7xidaciy.css';
import '../../css/r/rdd_owjsi.css';
import '../../css/b/brhlumr9l.css';
import '../../css/b/b2k370w3z.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="n7xidaciy wm-k"/><path class="rdd_owjsi"/><path class="brhlumr9l"/><path class="b2k370w3z wm-s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:package-plus"} {...others} />);
}

export default Component;
