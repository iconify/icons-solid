import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/s7lf6sb7u.css';

const viewBox = {"width":496,"height":512};
const content = `<path class="s7lf6sb7u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa6-brands:pinterest"} {...others} />);
}

export default Component;
