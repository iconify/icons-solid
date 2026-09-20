import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gbdto3ogj.css';
import '../../css/q/q8sv92b_b.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gbdto3ogj"/><path class="q8sv92b_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pingora-proxy-manager-dark"} {...others} />);
}

export default Component;
