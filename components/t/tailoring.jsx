import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/i/imjgmcbia.css';
import '../../css/w/w0cwj3s9y.css';
import '../../css/m/mr4uahbya.css';
import '../../css/q/quv7axtmz.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="imjgmcbia"/><path class="w0cwj3s9y"/><path class="mr4uahbya"/><path class="quv7axtmz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:tailoring"} {...others} />);
}

export default Component;
