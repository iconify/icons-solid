import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb0iq9g5x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="sb0iq9g5x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cups-dark"} {...others} />);
}

export default Component;
