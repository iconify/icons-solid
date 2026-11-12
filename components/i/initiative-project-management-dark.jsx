import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vfl8971ej.css';
import '../../css/j/jh_hmbyeg.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vfl8971ej"/><path class="jh_hmbyeg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:initiative-project-management-dark"} {...others} />);
}

export default Component;
