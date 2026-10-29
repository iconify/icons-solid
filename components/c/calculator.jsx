import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l7umh3bwe.css';
import '../../css/n/nj6yhupln.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l7umh3bwe"/><path class="nj6yhupln wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calculator"} {...others} />);
}

export default Component;
