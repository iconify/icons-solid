import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ulx3utvkz.css';
import '../../css/m/mdbjrxbez.css';
import '../../css/d/d3fz6j1wd.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="ulx3utvkz"/><path class="mdbjrxbez"/><path class="d3fz6j1wd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:messages-bubble-square-lock"} {...others} />);
}

export default Component;
