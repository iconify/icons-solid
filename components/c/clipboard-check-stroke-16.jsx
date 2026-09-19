import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ovvyb8bxl.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="ovvyb8bxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"garden:clipboard-check-stroke-16"} {...others} />);
}

export default Component;
