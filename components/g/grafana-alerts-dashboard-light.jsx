import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzg19p0qh.css';
import '../../css/f/f2eh-dbua.css';
import '../../css/a/aca60mb-f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="tzg19p0qh"/><path class="f2eh-dbua"/><path class="aca60mb-f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-alerts-dashboard-light"} {...others} />);
}

export default Component;
