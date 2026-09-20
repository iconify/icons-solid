import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v18ucqbzt.css';
import '../../css/f/f25ribbut.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v18ucqbzt"/><rect class="f25ribbut"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:calendars"} {...others} />);
}

export default Component;
