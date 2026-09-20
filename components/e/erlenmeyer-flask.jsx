import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/v/vz5ayus9i.css';
import '../../css/f/fw2vfk9gy.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="vz5ayus9i"/><path class="fw2vfk9gy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:erlenmeyer-flask"} {...others} />);
}

export default Component;
