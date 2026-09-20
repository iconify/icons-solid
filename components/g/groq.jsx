import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lg6obmb_i.css';
import '../../css/c/c_7z8eb4f.css';

const viewBox = {"width":201,"height":201};
const content = `<path class="lg6obmb_i"/><path class="c_7z8eb4f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:groq"} {...others} />);
}

export default Component;
