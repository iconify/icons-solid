import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/ga-o0vbwz.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="ga-o0vbwz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:recycle-1-flat"} {...others} />);
}

export default Component;
