import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f9qmrzbzq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="f9qmrzbzq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"game-icons:microscope-lens"} {...others} />);
}

export default Component;
