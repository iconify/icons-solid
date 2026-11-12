import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rovhc9buz.css';
import '../../css/f/fa6qugbtz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rovhc9buz"/><path class="fa6qugbtz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:ironcalc-dark"} {...others} />);
}

export default Component;
