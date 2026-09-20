import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/obebtmbgv.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="obebtmbgv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:map-pin-add"} {...others} />);
}

export default Component;
