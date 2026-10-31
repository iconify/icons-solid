import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/x/x-p4m3puv.css';
import '../../css/s/szd75cbmw.css';
import '../../css/f/fbx4okbtv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k x-p4m3puv"/><path class="szd75cbmw wm-a"/><path class="fbx4okbtv wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:table-of-contents"} {...others} />);
}

export default Component;
