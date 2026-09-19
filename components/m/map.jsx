import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j1lv1ybfr.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="j1lv1ybfr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:map"} {...others} />);
}

export default Component;
