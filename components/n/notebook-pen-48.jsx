import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w3wcsw9-a.css';
import '../../css/c/c05cblb0l.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="w3wcsw9-a"/><path class="c05cblb0l"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:notebook-pen-48"} {...others} />);
}

export default Component;
