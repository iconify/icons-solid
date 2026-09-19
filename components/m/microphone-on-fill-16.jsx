import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nnbe3gbbj.css';
import '../../css/f/fijsiubsv.css';
import '../../css/p/p9dzneb6v.css';

const viewBox = {"width":16,"height":16};
const content = `<g class="cuyn6tgcc"><rect class="nnbe3gbbj"/><path class="fijsiubsv"/></g><path class="p9dzneb6v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:microphone-on-fill-16"} {...others} />);
}

export default Component;
