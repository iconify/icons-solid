import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cl87nh5pk.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="cl87nh5pk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:adjust"} {...others} />);
}

export default Component;
