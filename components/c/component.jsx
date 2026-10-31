import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/a/awk3gltjq.css';
import '../../css/w/wr1htd5-j.css';
import '../../css/u/uabzkniwf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="awk3gltjq"/><path class="wm-k wr1htd5-j"/><path class="uabzkniwf wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:component"} {...others} />);
}

export default Component;
