import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u72deestk.css';
import '../../css/a/a41-ntbbp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="u72deestk"/><path class="a41-ntbbp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:hourglass"} {...others} />);
}

export default Component;
