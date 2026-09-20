import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qhjziobee.css';
import '../../css/v/vm1oqwb8w.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="qhjziobee"/><path class="vm1oqwb8w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:hands-up"} {...others} />);
}

export default Component;
