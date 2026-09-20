import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mfrv3tbut.css';
import '../../css/v/vzh-lybal.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mfrv3tbut"/><path class="vzh-lybal"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:sonarr-dark"} {...others} />);
}

export default Component;
