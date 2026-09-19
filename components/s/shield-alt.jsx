import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve4n1njjd.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ve4n1njjd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:shield-alt"} {...others} />);
}

export default Component;
