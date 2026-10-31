import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zzu4d6bef.css';
import '../../css/t/tnhq8r2kt.css';
import '../../css/w/wegbnabgq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="wm-k zzu4d6bef"/><path class="tnhq8r2kt wm-a"/><path class="wegbnabgq wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:refresh"} {...others} />);
}

export default Component;
