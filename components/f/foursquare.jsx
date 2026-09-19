import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/y/y-_-f6zsp.css';
import '../../css/c/cdrefwlle.css';
import '../../css/r/ruextfsfk.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="y-_-f6zsp"/><path class="cdrefwlle"/><path class="ruextfsfk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:foursquare"} {...others} />);
}

export default Component;
