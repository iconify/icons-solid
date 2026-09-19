import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iet1eb9kl.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="iet1eb9kl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cib:nginx"} {...others} />);
}

export default Component;
