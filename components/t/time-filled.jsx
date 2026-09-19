import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/faoq3ykkk.css';
import '../../css/d/d28ipjbsd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="faoq3ykkk"/><path class="d28ipjbsd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:time-filled"} {...others} />);
}

export default Component;
