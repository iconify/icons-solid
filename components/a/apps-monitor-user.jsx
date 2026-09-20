import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6qfcegov.css';
import '../../css/q/qhe-99bol.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="j6qfcegov"/><path class="qhe-99bol"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:apps-monitor-user"} {...others} />);
}

export default Component;
