import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rhyaxmbtx.css';

const viewBox = {"width":1408,"height":1664};
const content = `<path class="rhyaxmbtx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:xing"} {...others} />);
}

export default Component;
