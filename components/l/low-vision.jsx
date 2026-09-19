import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yjzeqy2ft.css';

const viewBox = {"width":1792,"height":1664};
const content = `<path class="yjzeqy2ft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:low-vision"} {...others} />);
}

export default Component;
