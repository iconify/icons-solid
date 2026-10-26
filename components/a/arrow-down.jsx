import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/l/l24gqyb4l.css';
import '../../css/o/o5l66lh6m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="l24gqyb4l"/><path class="o5l66lh6m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:arrow-down"} {...others} />);
}

export default Component;
