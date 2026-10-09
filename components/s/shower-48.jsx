import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ch7fqmebm.css';
import '../../css/v/vh9btobqw.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ch7fqmebm"/><path class="vh9btobqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:shower-48"} {...others} />);
}

export default Component;
