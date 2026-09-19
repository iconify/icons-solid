import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dvhc52j6y.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="dvhc52j6y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:grin-stars"} {...others} />);
}

export default Component;
