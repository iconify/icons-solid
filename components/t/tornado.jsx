import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/p/px2fxif7e.css';
import '../../css/b/bfe3j1boz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="px2fxif7e wm-k"/><path class="bfe3j1boz wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:tornado"} {...others} />);
}

export default Component;
