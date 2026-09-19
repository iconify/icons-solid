import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l0lbcs7zx.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="l0lbcs7zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"dinkie-icons:raised-back-of-hand-small"} {...others} />);
}

export default Component;
