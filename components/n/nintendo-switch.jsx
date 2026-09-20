import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/co33ozbue.css';
import '../../css/p/piy19x2pb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="co33ozbue"/><path class="piy19x2pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nintendo-switch"} {...others} />);
}

export default Component;
