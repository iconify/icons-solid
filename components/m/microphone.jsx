import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w337psblt.css';
import '../../css/u/u6ht0eb5g.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="w337psblt"/><path class="u6ht0eb5g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:microphone"} {...others} />);
}

export default Component;
