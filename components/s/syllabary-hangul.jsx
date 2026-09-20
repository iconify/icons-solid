import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mun4s9bhp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mun4s9bhp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:syllabary-hangul"} {...others} />);
}

export default Component;
