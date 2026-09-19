import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iuew-5_qh.css';

const viewBox = {"width":1280,"height":1664};
const content = `<path class="iuew-5_qh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:pinterest-p"} {...others} />);
}

export default Component;
