import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h96_q3ijz.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="h96_q3ijz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:monstera-leaf"} {...others} />);
}

export default Component;
