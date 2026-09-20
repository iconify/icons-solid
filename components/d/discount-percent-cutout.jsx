import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/isz0lobmi.css';

const viewBox = {"width":14,"height":14};
const content = `<path class="isz0lobmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:discount-percent-cutout"} {...others} />);
}

export default Component;
