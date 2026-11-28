import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i5edy9lin.css';

const viewBox = {"width":256,"height":256};
const content = `<path class="i5edy9lin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pullo:shield-user-bold"} {...others} />);
}

export default Component;
