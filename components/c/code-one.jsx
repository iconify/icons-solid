import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/o/o4f6p6xvo.css';
import '../../css/e/esf0c3b3y.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="o4f6p6xvo"/><path class="esf0c3b3y"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:code-one"} {...others} />);
}

export default Component;
