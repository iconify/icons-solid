import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z32qkbcxp.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="z32qkbcxp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-pyroscope-dark"} {...others} />);
}

export default Component;
