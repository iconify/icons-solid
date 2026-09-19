import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c1yx-1y0m.css';

const viewBox = {"width":640,"height":640};
const content = `<path class="c1yx-1y0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa7-regular:xmark-circle"} {...others} />);
}

export default Component;
