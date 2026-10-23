import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vak25o3nz.css';
import '../../css/l/l0o9iib8s.css';
import '../../css/i/il_7q5b5s.css';
import '../../css/f/f1r4lxbsy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="vak25o3nz"/><path class="l0o9iib8s"/><path class="il_7q5b5s"/><path class="f1r4lxbsy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:tool-off"} {...others} />);
}

export default Component;
