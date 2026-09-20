import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhjziobee.css';
import '../../css/o/oywhc6eaf.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qhjziobee"/><path class="oywhc6eaf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:female"} {...others} />);
}

export default Component;
