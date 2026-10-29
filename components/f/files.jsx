import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/y/yui4pigey.css';
import '../../css/v/vqyclfbmt.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="yui4pigey"/><path class="vqyclfbmt wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:files"} {...others} />);
}

export default Component;
