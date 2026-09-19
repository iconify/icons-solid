import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iv8p9kb5k.css';

const viewBox = {"width":128,"height":128};
const content = `<path class="iv8p9kb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"devicon-plain:svelte-wordmark"} {...others} />);
}

export default Component;
