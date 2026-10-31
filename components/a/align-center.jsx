import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/b48f0ccsu.css';
import '../../css/x/x-g0wab5m.css';
import '../../css/h/h7g538bxc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="b48f0ccsu wm-shadow"/><path class="wm-shadow x-g0wab5m"/><path class="h7g538bxc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:align-center"} {...others} />);
}

export default Component;
