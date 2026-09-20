import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hd5r8wuvk.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="hd5r8wuvk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"osmic:jewish-14"} {...others} />);
}

export default Component;
