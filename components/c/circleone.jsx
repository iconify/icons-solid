import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zg1h2i3ab.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="zg1h2i3ab"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"whh:circleone"} {...others} />);
}

export default Component;
