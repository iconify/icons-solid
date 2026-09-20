import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/y-765w5eo.css';
import '../../css/h/hyf7hzboc.css';
import '../../css/e/ekj6g0bsb.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="y-765w5eo"/><path class="hyf7hzboc"/><path clip-rule="evenodd" class="ekj6g0bsb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:fried-egg-breakfast-flat"} {...others} />);
}

export default Component;
