import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lj7h6gphw.css';

const viewBox = {"width":2048,"height":1280};
const content = `<path class="lj7h6gphw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa:digg"} {...others} />);
}

export default Component;
