import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhjziobee.css';
import '../../css/q/q7z1euqgp.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qhjziobee"/><path class="q7z1euqgp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:male"} {...others} />);
}

export default Component;
