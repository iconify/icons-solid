import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8pqey5gh.css';

const viewBox = {"width":1026,"height":1023};
const content = `<path class="g8pqey5gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:webplatform"} {...others} />);
}

export default Component;
