import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e8cxt48ie.css';
import '../../css/w/wsae9_log.css';
import '../../css/r/rylvxccac.css';
import '../../css/l/l6jqjmbhe.css';
import '../../css/q/qy525jbwx.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="e8cxt48ie"/><path class="wsae9_log"/><path class="rylvxccac"/><path class="l6jqjmbhe"/><path class="qy525jbwx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:flag-south-africa"} {...others} />);
}

export default Component;
