import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d8je3wbfv.css';

const viewBox = {"width":2304,"height":1472};
const content = `<path class="d8je3wbfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:handshake-o"} {...others} />);
}

export default Component;
