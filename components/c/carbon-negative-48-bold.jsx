import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vlyerkbto.css';
import '../../css/u/u0bew_y1l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="vlyerkbto"/><path class="u0bew_y1l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:carbon-negative-48-bold"} {...others} />);
}

export default Component;
