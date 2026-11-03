import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gopd9rgyc.css';

const viewBox = {"width":279.728,"height":95.711};
const content = `<path class="gopd9rgyc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:kroki"} {...others} />);
}

export default Component;
