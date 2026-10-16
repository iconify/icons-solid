import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kimfu9q5t.css';
import '../../css/o/ow_xmxbad.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="kimfu9q5t"/><path class="ow_xmxbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:file-question-20"} {...others} />);
}

export default Component;
