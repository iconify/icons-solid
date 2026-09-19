import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vugygd5du.css';
import '../../css/b/bjggiqboe.css';
import '../../css/f/faeazbblb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vugygd5du"/><path class="bjggiqboe"/><path class="faeazbblb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:poo"} {...others} />);
}

export default Component;
