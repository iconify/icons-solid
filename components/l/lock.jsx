import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cnlyh2k5h.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="cnlyh2k5h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:lock"} {...others} />);
}

export default Component;
