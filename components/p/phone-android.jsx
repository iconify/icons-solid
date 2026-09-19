import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vc5t4xbsr.css';
import '../../css/w/w2xstcbue.css';
import '../../css/r/rq_3jfb5z.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vc5t4xbsr"/><path class="w2xstcbue"/><path class="rq_3jfb5z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:phone-android"} {...others} />);
}

export default Component;
