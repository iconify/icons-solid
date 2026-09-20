import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fuhw34bft.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="fuhw34bft"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:corner-upper-right"} {...others} />);
}

export default Component;
