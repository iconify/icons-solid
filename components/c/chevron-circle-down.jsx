import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/imt9l1hvr.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="imt9l1hvr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vaadin:chevron-circle-down"} {...others} />);
}

export default Component;
