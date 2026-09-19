import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gc4vjukdb.css';
import '../../css/u/upj-l8mwq.css';
import '../../css/s/sr0w_1k5f.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="gc4vjukdb"/><path class="upj-l8mwq"/><path class="sr0w_1k5f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:chilipepper"} {...others} />);
}

export default Component;
