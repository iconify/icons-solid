import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/d/dvzfih3uy.css';
import '../../css/y/y3-lsdbgx.css';
import '../../css/g/g6i-9h-_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="dvzfih3uy"/><path class="y3-lsdbgx"/><path class="g6i-9h-_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:broom"} {...others} />);
}

export default Component;
