import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yawa8zbxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="yawa8zbxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:box-variant-closed-add"} {...others} />);
}

export default Component;
