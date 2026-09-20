import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qc41t3qzr.css';
import '../../css/b/bqx9vl8iw.css';
import '../../css/z/zpc8wfbap.css';

const viewBox = {"width":512,"height":512};
const content = `<linearGradient id="SVGYAtBZbyT" x1="255.548" x2="255.548" y1="-113.869" y2="500.194" gradientTransform="matrix(1 0 0 -1 0 514)" gradientUnits="userSpaceOnUse"><stop offset="0" class="qc41t3qzr"/><stop offset="1" class="bqx9vl8iw"/></linearGradient><path fill="url(#SVGYAtBZbyT)" class="zpc8wfbap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:grafana-pyroscope"} {...others} />);
}

export default Component;
