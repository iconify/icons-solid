import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qsg68bc0n.css';
import '../../css/e/e4b73-b9f.css';
import '../../css/n/nddo_tskf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="qsg68bc0n"><path class="e4b73-b9f"/><path class="nddo_tskf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"doodle-icons:arrow-up"} {...others} />);
}

export default Component;
