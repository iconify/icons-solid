import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/eoiz0rolg.css';
import '../../css/p/p2z9olxff.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="eoiz0rolg"/><path class="p2z9olxff wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:map"} {...others} />);
}

export default Component;
