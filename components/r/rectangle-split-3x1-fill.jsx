import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cc0ak45iy.css';

const viewBox = {"width":56,"height":56};
const content = `<path class="cc0ak45iy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"f7:rectangle-split-3x1-fill"} {...others} />);
}

export default Component;
