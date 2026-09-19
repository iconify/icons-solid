import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm5ogkonw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jm5ogkonw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:concierge-bell"} {...others} />);
}

export default Component;
