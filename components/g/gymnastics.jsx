import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ti4q6eknm.css';
import '../../css/q/q3w-2jpjr.css';
import '../../css/n/nzovm6bgd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ti4q6eknm"><path class="q3w-2jpjr"/><path class="nzovm6bgd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:gymnastics"} {...others} />);
}

export default Component;
