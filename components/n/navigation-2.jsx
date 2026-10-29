import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xp-rs9b5v.css';
import '../../css/g/g4r9qeblv.css';
import '../../css/c/cbz0ggb3u.css';
import '../../css/p/pw2rrzbrr.css';
import '../../css/p/px91c25qt.css';
import '../../css/f/f9vet_b3u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="wm-shadow xp-rs9b5v"/><path class="g4r9qeblv wm-shadow"/><path class="cbz0ggb3u"/><path class="pw2rrzbrr"/><path class="px91c25qt"/><path class="f9vet_b3u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:navigation-2"} {...others} />);
}

export default Component;
