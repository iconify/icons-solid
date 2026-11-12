import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o0u0crbzh.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o0u0crbzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-tempo-dark"} {...others} />);
}

export default Component;
