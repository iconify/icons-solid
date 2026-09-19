import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl5jgnb6c.css';
import '../../css/z/zdmdccc7m.css';

const viewBox = {"width":24,"height":24};
const content = `<circle class="tl5jgnb6c"/><path class="zdmdccc7m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-child"} {...others} />);
}

export default Component;
