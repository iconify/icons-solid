import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xyu4b0bqn.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xyu4b0bqn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:altcha-dark"} {...others} />);
}

export default Component;
