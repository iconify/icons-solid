import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/v/vyn2gq-gt.css';
import '../../css/k/kt93orw5x.css';
import '../../css/t/tbf9wf6kd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="vyn2gq-gt"/><path class="kt93orw5x"/><path class="tbf9wf6kd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:croissant"} {...others} />);
}

export default Component;
