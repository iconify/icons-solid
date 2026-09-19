import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/te9g8x_4z.css';

const viewBox = {"width":1024,"height":1408};
const content = `<path class="te9g8x_4z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:euro"} {...others} />);
}

export default Component;
