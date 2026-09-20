import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/ryxsteg5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ryxsteg5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:temperature-kelvin"} {...others} />);
}

export default Component;
