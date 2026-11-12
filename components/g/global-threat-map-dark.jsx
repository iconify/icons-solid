import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_0rlkxdi.css';
import '../../css/l/l1uhs48mi.css';
import '../../css/y/ygoprobme.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="a_0rlkxdi"/><circle class="l1uhs48mi"/><circle class="ygoprobme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:global-threat-map-dark"} {...others} />);
}

export default Component;
