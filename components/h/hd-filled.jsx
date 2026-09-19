import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h717r1b5y.css';
import '../../css/q/qvcljuewd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="h717r1b5y"/><path class="qvcljuewd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:hd-filled"} {...others} />);
}

export default Component;
