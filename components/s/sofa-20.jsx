import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ycu-hhf9w.css';
import '../../css/g/g3yqyfbnj.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="ycu-hhf9w"/><path class="g3yqyfbnj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:sofa-20"} {...others} />);
}

export default Component;
