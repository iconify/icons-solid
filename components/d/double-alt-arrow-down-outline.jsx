import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f652b_3vs.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="f652b_3vs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:double-alt-arrow-down-outline"} {...others} />);
}

export default Component;
