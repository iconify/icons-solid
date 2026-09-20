import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tyzh6ybgb.css';
import '../../css/q/qhadlbb6x.css';
import '../../css/u/utv-fzbtz.css';
import '../../css/a/al580-bkx.css';
import '../../css/s/sk62d4bym.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="tyzh6ybgb"/><path class="qhadlbb6x"/><path class="utv-fzbtz"/><path clip-rule="evenodd" class="al580-bkx"/><path class="sk62d4bym"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:presentation-flat"} {...others} />);
}

export default Component;
