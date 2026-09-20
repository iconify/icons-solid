import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qdfqr6ksx.css';
import '../../css/t/tqdn9_b8f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qdfqr6ksx"/><path class="tqdn9_b8f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:splitpro-dark"} {...others} />);
}

export default Component;
