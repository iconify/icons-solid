import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/db2xgugay.css';
import '../../css/g/gi2xlrbzn.css';
import '../../css/u/u4j5hjbez.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="db2xgugay"/><path class="gi2xlrbzn"/><path class="u4j5hjbez"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:radarr-anime"} {...others} />);
}

export default Component;
