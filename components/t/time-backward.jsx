import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu5aiccfe.css';
import '../../css/r/r0zr1abhx.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="nu5aiccfe"/><path class="r0zr1abhx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:time-backward"} {...others} />);
}

export default Component;
