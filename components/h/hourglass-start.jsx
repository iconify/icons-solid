import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f2jymg60n.css';
import '../../css/w/w_nq73a6c.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="f2jymg60n"/><path class="w_nq73a6c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:hourglass-start"} {...others} />);
}

export default Component;
