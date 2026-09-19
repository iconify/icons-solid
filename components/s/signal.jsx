import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/n/n07-27byw.css';
import '../../css/q/qw5luvbyp.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="wwvp95byt"><circle class="n07-27byw"/><path class="qw5luvbyp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs-poly:signal"} {...others} />);
}

export default Component;
