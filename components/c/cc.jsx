import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk07qcbce.css';
import '../../css/c/cyflbfbns.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk07qcbce"/><path class="cyflbfbns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:cc"} {...others} />);
}

export default Component;
