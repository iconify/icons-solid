import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wfqul596w.css';
import '../../css/a/ao5bk4bro.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="wfqul596w"/><path class="ao5bk4bro"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:update-now"} {...others} />);
}

export default Component;
