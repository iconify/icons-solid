import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/stknrr2es.css';
import '../../css/a/aoyvwizmq.css';
import '../../css/o/oilmmsbgk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="stknrr2es"/><path class="aoyvwizmq"/><path class="oilmmsbgk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:list-alphabet"} {...others} />);
}

export default Component;
