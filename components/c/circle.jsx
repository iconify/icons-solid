import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/q/q3zxe9iuw.css';
import '../../css/y/yw4fz_b6b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="q3zxe9iuw"/><path class="yw4fz_b6b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:circle"} {...others} />);
}

export default Component;
