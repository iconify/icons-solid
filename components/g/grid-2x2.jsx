import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/ma38mbcuf.css';
import '../../css/n/nozftdbrr.css';
import '../../css/x/xhxh21-sl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="ma38mbcuf"/><path class="nozftdbrr"/><path class="xhxh21-sl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:grid-2x2"} {...others} />);
}

export default Component;
