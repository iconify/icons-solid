import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/i/ig50veboi.css';
import '../../css/w/wz6wyd0qz.css';
import '../../css/a/avcvo1bgd.css';
import '../../css/h/h23kvgyag.css';
import '../../css/t/tskbaab5u.css';
import '../../css/c/ckga4abpi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ig50veboi wm-shadow"/><path class="wz6wyd0qz"/><path class="avcvo1bgd"/><path class="h23kvgyag"/><path class="tskbaab5u"/><path class="ckga4abpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:folder-down"} {...others} />);
}

export default Component;
