import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pkd9qz5fj.css';

const viewBox = {"width":1536,"height":1536};
const content = `<path class="pkd9qz5fj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:gear"} {...others} />);
}

export default Component;
