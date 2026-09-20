import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p2gyfudfs.css';
import '../../css/b/b5kui9phr.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="p2gyfudfs"/><path class="b5kui9phr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:ongoing-conversation-ltr"} {...others} />);
}

export default Component;
