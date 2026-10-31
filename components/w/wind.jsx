import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/v/v335rzk7y.css';
import '../../css/j/j4ltlwuyr.css';
import '../../css/t/txx2gwbeg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="v335rzk7y wm-k"/><path class="j4ltlwuyr wm-a"/><path class="txx2gwbeg wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:wind"} {...others} />);
}

export default Component;
