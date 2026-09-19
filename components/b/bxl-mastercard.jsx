import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isx0-mbjk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="isx0-mbjk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxl-mastercard"} {...others} />);
}

export default Component;
