import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/d/db51_1bbb.css';
import '../../css/m/md286fbip.css';
import '../../css/d/diq9bpbfb.css';
import '../../css/j/jz9h9rb4r.css';
import '../../css/e/e4utglbqp.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="db51_1bbb"/><g class="md286fbip"><path class="diq9bpbfb"/><path class="jz9h9rb4r"/><path class="e4utglbqp"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:x"} {...others} />);
}

export default Component;
