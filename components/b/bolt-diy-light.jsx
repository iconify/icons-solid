import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ix5kfyb-x.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="ix5kfyb-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:bolt-diy-light"} {...others} />);
}

export default Component;
