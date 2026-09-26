import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hu2a-wbcj.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hu2a-wbcj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"at-icons:grabber-dots"} {...others} />);
}

export default Component;
