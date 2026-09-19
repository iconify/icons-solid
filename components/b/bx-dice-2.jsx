import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c98at3bul.css';
import '../../css/g/gxcn5z-fm.css';
import '../../css/y/y90j6oboo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c98at3bul"/><circle class="gxcn5z-fm"/><circle class="y90j6oboo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-dice-2"} {...others} />);
}

export default Component;
