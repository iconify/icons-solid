import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/grwh7o55x.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="grwh7o55x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chevron-circle-right"} {...others} />);
}

export default Component;
