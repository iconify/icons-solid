import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohh30p-3w.css';

const viewBox = {"width":21,"height":21};
const content = `<path class="ohh30p-3w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"system-uicons:panel-bottom"} {...others} />);
}

export default Component;
