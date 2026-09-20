import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/h_-yb3kpt.css';
import '../../css/s/sydtumbbk.css';
import '../../css/t/td16eo5uh.css';
import '../../css/h/hug6mbc4q.css';
import '../../css/r/ro5zkfl8x.css';
import '../../css/y/yb4s30lcq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="h_-yb3kpt"/><path class="sydtumbbk"/><path class="td16eo5uh"/><path class="hug6mbc4q"/><path class="ro5zkfl8x"/><path class="yb4s30lcq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:burger"} {...others} />);
}

export default Component;
