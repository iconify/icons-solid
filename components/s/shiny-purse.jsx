import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y2tp2m7cs.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="y2tp2m7cs"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:shiny-purse"} {...others} />);
}

export default Component;
