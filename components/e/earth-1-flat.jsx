import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sf-8xspff.css';
import '../../css/r/ragpzl4ss.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="sf-8xspff"/><path class="ragpzl4ss"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:earth-1-flat"} {...others} />);
}

export default Component;
