import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bcny63jha.css';
import '../../css/o/ocydsvu6l.css';
import '../../css/x/xm577jbwp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="bcny63jha"/><path class="ocydsvu6l"/><path class="xm577jbwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-panel-bolt-48-bold"} {...others} />);
}

export default Component;
