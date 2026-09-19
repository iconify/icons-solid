import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu63zhw-d.css';

const viewBox = {"width":384,"height":512};
const content = `<path class="hu63zhw-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:pinterest-p"} {...others} />);
}

export default Component;
