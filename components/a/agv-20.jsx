import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qia2ord5v.css';
import '../../css/r/reifvraao.css';
import '../../css/j/jbfxwxb0g.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="qia2ord5v"/><path class="reifvraao"/><path class="jbfxwxb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:agv-20"} {...others} />);
}

export default Component;
