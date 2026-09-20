import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zmgjq6fmk.css';
import '../../css/t/t9hsh_ubw.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="zmgjq6fmk"/><path class="t9hsh_ubw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-lock"} {...others} />);
}

export default Component;
