import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbbm33x5p.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="hbbm33x5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-mimir-dark"} {...others} />);
}

export default Component;
