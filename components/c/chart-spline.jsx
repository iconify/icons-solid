import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/f/fefa1ib-u.css';
import '../../css/c/cw36_6mco.css';
import '../../css/h/h13-u3bnw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="fefa1ib-u wm-k"/><path class="cw36_6mco wm-a"/><path class="h13-u3bnw wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:chart-spline"} {...others} />);
}

export default Component;
