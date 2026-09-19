import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/i/iwzi1nbxx.css';
import '../../css/h/h4l4yqvep.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><rect class="iwzi1nbxx"/><path class="h4l4yqvep"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:check-square"} {...others} />);
}

export default Component;
