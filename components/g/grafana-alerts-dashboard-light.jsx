import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzg19p0qh.css';
import '../../css/q/q8n-7fbhw.css';
import '../../css/g/gy63hpboi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tzg19p0qh"/><path class="q8n-7fbhw"/><path class="gy63hpboi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-alerts-dashboard-light"} {...others} />);
}

export default Component;
