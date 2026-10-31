import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/h/h-pfqgbzl.css';
import '../../css/d/dc6exx_io.css';
import '../../css/q/q3nrevbfj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="h-pfqgbzl wm-k"/><path class="dc6exx_io wm-a"/><path class="q3nrevbfj wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:underline"} {...others} />);
}

export default Component;
