import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xrnc0612b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xrnc0612b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:eyedropper-variant"} {...others} />);
}

export default Component;
