import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q8diq5roc.css';
import '../../css/x/xko87bc4s.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="q8diq5roc"/><path class="xko87bc4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ep:coordinate"} {...others} />);
}

export default Component;
