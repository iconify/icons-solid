import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/e/ehveol0vc.css';
import '../../css/m/m8-1o1onw.css';
import '../../css/f/ff2-4nb1f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="ehveol0vc"/><path class="m8-1o1onw"/><path class="ff2-4nb1f wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:bamboo"} {...others} />);
}

export default Component;
