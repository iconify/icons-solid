import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/otlllccgn.css';
import '../../css/w/wtfmx7b3v.css';
import '../../css/t/tmj9w9mrh.css';
import '../../css/a/awt6j9brq.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="otlllccgn"/><g class="wtfmx7b3v"><path class="tmj9w9mrh"/><path class="awt6j9brq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:positive-dynamic"} {...others} />);
}

export default Component;
