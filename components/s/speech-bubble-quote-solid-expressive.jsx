import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/coowa9bje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="coowa9bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:speech-bubble-quote-solid-expressive"} {...others} />);
}

export default Component;
