import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pg07ajpns.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="pg07ajpns"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:thumbs-up"} {...others} />);
}

export default Component;
