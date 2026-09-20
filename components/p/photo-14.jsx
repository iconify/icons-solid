import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ewe08fbhh.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="ewe08fbhh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:photo-14"} {...others} />);
}

export default Component;
