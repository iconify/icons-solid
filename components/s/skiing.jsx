import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nm4c8-w_n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="nm4c8-w_n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:skiing"} {...others} />);
}

export default Component;
