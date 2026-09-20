import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu811do9k.css';

const viewBox = {"width":243.5,"height":80};
const content = `<path clip-rule="evenodd" class="nu811do9k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:hulu-dark"} {...others} />);
}

export default Component;
