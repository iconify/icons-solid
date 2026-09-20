import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ucsmcqbrq.css';
import '../../css/f/f1ouj-bgy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ucsmcqbrq"/><path class="f1ouj-bgy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ix:document-ai-filled"} {...others} />);
}

export default Component;
