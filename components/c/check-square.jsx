import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/vnq0g0eje.css';
import '../../css/d/do56rl02a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="vnq0g0eje"/><path class="do56rl02a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"feather:check-square"} {...others} />);
}

export default Component;
