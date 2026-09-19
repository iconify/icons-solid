import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m56mzhukz.css';
import '../../css/q/q5sauxgpz.css';
import '../../css/k/kwfvx1__p.css';
import '../../css/b/b6mu38bbk.css';
import '../../css/n/na0k8369x.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="m56mzhukz"/><path class="q5sauxgpz"/><g class="kwfvx1__p"><circle class="b6mu38bbk"/><path class="na0k8369x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:reading"} {...others} />);
}

export default Component;
