import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/nu-dcbk7y.css';
import '../../css/b/b4lrjlbwd.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><rect class="nu-dcbk7y"/><path class="b4lrjlbwd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:caret-square"} {...others} />);
}

export default Component;
