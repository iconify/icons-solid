import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clx1tcc9n.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="clx1tcc9n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-solid:briefcase-medical"} {...others} />);
}

export default Component;
