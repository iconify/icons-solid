import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b0jojrbyn.css';
import '../../css/k/kb_awpb0a.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="b0jojrbyn"/><path class="kb_awpb0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:zrok-dark"} {...others} />);
}

export default Component;
