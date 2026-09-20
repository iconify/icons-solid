import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fwuekqkoy.css';
import '../../css/x/x7a-2lu-d.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fwuekqkoy"/><path class="x7a-2lu-d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:logo-instagram-filled"} {...others} />);
}

export default Component;
