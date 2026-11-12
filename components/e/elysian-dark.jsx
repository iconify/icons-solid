import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/igt5iubxu.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="igt5iubxu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:elysian-dark"} {...others} />);
}

export default Component;
