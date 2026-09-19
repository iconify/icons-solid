import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tirob2dio.css';

const viewBox = {"width":448,"height":512};
const content = `<path class="tirob2dio"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-brands:sistrix"} {...others} />);
}

export default Component;
