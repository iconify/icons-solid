import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c98at3bul.css';
import '../../css/i/ii_7x9egm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c98at3bul"/><path class="ii_7x9egm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bx-image-alt"} {...others} />);
}

export default Component;
