import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ueyhp9s-v.css';
import '../../css/u/u323u8bnq.css';
import '../../css/c/cdjzimb7l.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ueyhp9s-v"/><path class="u323u8bnq"/><path class="cdjzimb7l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ksuite-kmeet-dark"} {...others} />);
}

export default Component;
