import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/q/q53134oub.css';
import '../../css/m/m9awzuz4m.css';
import '../../css/i/izz9u2a6d.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><circle class="q53134oub"/><circle class="m9awzuz4m"/><path class="izz9u2a6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:pearl-of-the-orient"} {...others} />);
}

export default Component;
