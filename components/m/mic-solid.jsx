import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iz75m85jy.css';
import '../../css/i/ipvgj6bpp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iz75m85jy"/><path class="ipvgj6bpp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:mic-solid"} {...others} />);
}

export default Component;
