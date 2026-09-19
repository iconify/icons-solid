import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jwb4r1b5r.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="jwb4r1b5r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:magnet"} {...others} />);
}

export default Component;
