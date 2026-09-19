import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q4n9_hbzl.css';
import '../../css/d/dy7t98bks.css';
import '../../css/e/e92ev1b5s.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="q4n9_hbzl"/><path class="dy7t98bks"/><path class="e92ev1b5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:study-unread"} {...others} />);
}

export default Component;
