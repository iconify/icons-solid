import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f8347h8je.css';
import '../../css/n/n4wo8ebep.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="f8347h8je"/><path class="n4wo8ebep"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:winch-20-bold"} {...others} />);
}

export default Component;
