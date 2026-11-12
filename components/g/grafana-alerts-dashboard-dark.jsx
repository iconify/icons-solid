import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j89cktuio.css';
import '../../css/r/rgvx_5b3k.css';
import '../../css/i/io-5labnh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j89cktuio"/><path class="rgvx_5b3k"/><path class="io-5labnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-alerts-dashboard-dark"} {...others} />);
}

export default Component;
