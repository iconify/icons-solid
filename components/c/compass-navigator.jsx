import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/e/e1fnlelix.css';
import '../../css/q/qatdem52d.css';
import '../../css/y/yae4tz53t.css';
import '../../css/s/szq7p_bjb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="e1fnlelix"/><path class="qatdem52d"/><path class="yae4tz53t"/><path class="szq7p_bjb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:compass-navigator"} {...others} />);
}

export default Component;
