import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/m0e4m_qgc.css';
import '../../css/x/xbfokwbym.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="m0e4m_qgc"/><path class="xbfokwbym"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:acquiremock"} {...others} />);
}

export default Component;
