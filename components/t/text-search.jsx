import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ezgbeof7j.css';
import '../../css/e/e7kshwb3h.css';
import '../../css/n/nqbqjtbuq.css';
import '../../css/x/xbs1z5b9g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ezgbeof7j wm-k"/><path class="e7kshwb3h wm-a"/><path class="nqbqjtbuq"/><path class="xbs1z5b9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:text-search"} {...others} />);
}

export default Component;
