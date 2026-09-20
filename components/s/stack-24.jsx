import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vg_zrkbvf.css';
import '../../css/j/j525vvb7b.css';
import '../../css/s/s9rtedbwj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="vg_zrkbvf"/><path class="j525vvb7b"/><path class="s9rtedbwj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:stack-24"} {...others} />);
}

export default Component;
