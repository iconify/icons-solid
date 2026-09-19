import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/f/fqu4l84ar.css';
import '../../css/u/uo25yfbxi.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><rect class="fqu4l84ar"/><rect class="uo25yfbxi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:rectangle"} {...others} />);
}

export default Component;
