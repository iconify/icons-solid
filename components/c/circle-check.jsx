import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9qr65bxt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f9qr65bxt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mi:circle-check"} {...others} />);
}

export default Component;
