import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c4-hwxpky.css';
import '../../css/w/wtf96pb3l.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="c4-hwxpky"/><path class="wtf96pb3l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-off-stroke-20"} {...others} />);
}

export default Component;
