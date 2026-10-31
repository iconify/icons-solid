import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/n/nz3oscbtn.css';
import '../../css/m/mbzukt5ba.css';
import '../../css/c/camcnmb1b.css';
import '../../css/m/mkpz7qbob.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="nz3oscbtn"/><path class="mbzukt5ba wm-shine"/><path class="camcnmb1b wm-k"/><path class="mkpz7qbob wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:presentation"} {...others} />);
}

export default Component;
