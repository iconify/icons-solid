import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us6b7-d0g.css';
import '../../css/p/p78ussb0k.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="us6b7-d0g"/><path class="p78ussb0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:battery-quarter"} {...others} />);
}

export default Component;
