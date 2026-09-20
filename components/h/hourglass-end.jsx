import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/acy5gvbto.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="acy5gvbto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:hourglass-end"} {...others} />);
}

export default Component;
