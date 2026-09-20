import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mtb0g6klh.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="mtb0g6klh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"raphael:windows"} {...others} />);
}

export default Component;
