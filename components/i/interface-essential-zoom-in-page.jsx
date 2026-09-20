import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mm9jpqbmc.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mm9jpqbmc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-pixel:interface-essential-zoom-in-page"} {...others} />);
}

export default Component;
