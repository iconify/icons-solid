import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vy9np2b1h.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="vy9np2b1h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"simple-line-icons:screen-smartphone"} {...others} />);
}

export default Component;
