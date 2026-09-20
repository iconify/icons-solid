import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/q7h6zc0to.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="q7h6zc0to"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:level-up-bold"} {...others} />);
}

export default Component;
