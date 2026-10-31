import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/f4u2m_vyc.css';
import '../../css/g/gjj8xkb8a.css';
import '../../css/g/g8ehjj7yy.css';
import '../../css/k/ksdsltdkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="f4u2m_vyc"/><path class="gjj8xkb8a wm-shine"/><path class="g8ehjj7yy wm-k"/><path class="ksdsltdkn wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:server"} {...others} />);
}

export default Component;
