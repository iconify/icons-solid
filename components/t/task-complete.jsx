import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jdey06bji.css';
import '../../css/q/qng8eexvj.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="jdey06bji"/><path class="qng8eexvj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:task-complete"} {...others} />);
}

export default Component;
