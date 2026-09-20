import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rt-qc4b_x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rt-qc4b_x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:vanguard-dark"} {...others} />);
}

export default Component;
