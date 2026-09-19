import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/od9a5k13f.css';

const viewBox = {"width":1024,"height":1025};
const content = `<path class="od9a5k13f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:shapes"} {...others} />);
}

export default Component;
