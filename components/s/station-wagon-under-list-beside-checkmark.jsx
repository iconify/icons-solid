import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fv878y2jt.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="fv878y2jt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pinhead:station-wagon-under-list-beside-checkmark"} {...others} />);
}

export default Component;
