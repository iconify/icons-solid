import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fo-qmjehl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fo-qmjehl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:panorama-h-alt"} {...others} />);
}

export default Component;
