import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z1c-26sug.css';

const viewBox = {"width":65,"height":65,"left":33};
const content = `<path class="z1c-26sug"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg:chunk"} {...others} />);
}

export default Component;
