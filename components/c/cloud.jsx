import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dnfh_j-gh.css';

const viewBox = {"width":819,"height":620};
const content = `<path class="dnfh_j-gh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ls:cloud"} {...others} />);
}

export default Component;
