import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v40au7b7o.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="v40au7b7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:cetusguard-dark"} {...others} />);
}

export default Component;
