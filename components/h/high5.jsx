import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jm7ehzbhq.css';
import '../../css/w/wkh8_5bnt.css';
import '../../css/u/u3v1vub1r.css';
import '../../css/r/r6kvu8l2y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="jm7ehzbhq"/><path class="wkh8_5bnt"/><path class="u3v1vub1r"/><path class="r6kvu8l2y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:high5"} {...others} />);
}

export default Component;
