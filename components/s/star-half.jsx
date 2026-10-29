import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u8dzrhbsa.css';
import '../../css/i/i91j8nbko.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="u8dzrhbsa"/><path class="i91j8nbko"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:star-half"} {...others} />);
}

export default Component;
