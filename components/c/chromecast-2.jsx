import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gdrh5n46t.css';
import '../../css/l/lip2wgr-f.css';
import '../../css/y/y74vs9bde.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="gdrh5n46t"/><path class="lip2wgr-f"/><path class="y74vs9bde"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"nrk:chromecast-2"} {...others} />);
}

export default Component;
