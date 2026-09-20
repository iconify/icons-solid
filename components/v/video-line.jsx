import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/us-21_hyf.css';
import '../../css/p/p-8ny1bzh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="us-21_hyf"/><path class="p-8ny1bzh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:video-line"} {...others} />);
}

export default Component;
