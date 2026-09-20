import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8z18xbtt.css';
import '../../css/j/j1680wbis.css';
import '../../css/a/aavykeq3q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="n8z18xbtt"/><path class="j1680wbis"/><path class="aavykeq3q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:pastefy"} {...others} />);
}

export default Component;
