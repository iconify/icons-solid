import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j89cktuio.css';
import '../../css/t/tx20ehscf.css';
import '../../css/h/h4zt9xb_v.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j89cktuio"/><path class="tx20ehscf"/><path class="h4zt9xb_v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-alerts-dashboard-dark"} {...others} />);
}

export default Component;
