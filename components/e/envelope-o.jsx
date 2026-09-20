import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vr4f3tbci.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="vr4f3tbci"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:envelope-o"} {...others} />);
}

export default Component;
