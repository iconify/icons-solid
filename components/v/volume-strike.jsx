import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uzgbc4l5y.css';
import '../../css/q/qebutnwnh.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="uzgbc4l5y"/><path class="qebutnwnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:volume-strike"} {...others} />);
}

export default Component;
