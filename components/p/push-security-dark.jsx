import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x1nmm7blt.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="x1nmm7blt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:push-security-dark"} {...others} />);
}

export default Component;
