import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to9lmzkqp.css';
import '../../css/i/ittwa03gj.css';
import '../../css/x/xvd4abccd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="to9lmzkqp"/><path class="ittwa03gj"/><path class="xvd4abccd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-expand-1"} {...others} />);
}

export default Component;
