import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fue3z8bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fue3z8bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:quiet-area"} {...others} />);
}

export default Component;
