import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hbs3f-s9t.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="hbs3f-s9t"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-dial-pad-1"} {...others} />);
}

export default Component;
