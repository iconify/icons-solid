import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mut1umbgi.css';
import '../../css/g/g3-s662on.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="mut1umbgi"/><path class="g3-s662on"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:date-input"} {...others} />);
}

export default Component;
